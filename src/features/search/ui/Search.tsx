import React, { ChangeEvent } from 'react';
import { PersonCard } from '../../../entities/person/ui/PersonCard';
import { NavigateButton } from '../../../shared/ui/NavigateButton';
import { debounce } from '../../../shared/utils/debounce';
import { ISearchState } from '../types';

const baseUrl = 'https://swapi.dev/api/people/?search=&page=1';

export class Search extends React.Component<{}, ISearchState> {
  constructor() {
    super(undefined!);
    this.state = {
      url: baseUrl,
      data: undefined,
      term: '',
      debouncedTerm: '',
      isLoading: false,
      page: 1,
    };
  }

  debounced = debounce(
    (str: string) => this.setState(state => ({ ...state, debouncedTerm: str })),
    500,
  );

  fetchPeople(url: string) {
    this.setState(state => ({ ...state, isLoading: true }));
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(state => ({ ...state, data })))
      .finally(() => this.setState(state => ({ ...state, isLoading: false })));
  }

  componentDidMount(): void {
    this.fetchPeople(this.state.url);
  }

  componentDidUpdate({}, prevState: Readonly<ISearchState>): void {
    if (prevState.page !== this.state.page)
      this.setState(state => ({
        ...state,
        url: state.url.split('&')[0] + `&page=${this.state.page}`,
      }));
    if (prevState.debouncedTerm !== this.state.debouncedTerm)
      this.setState(state => ({
        ...state,
        url:
          baseUrl.split('&')[0] +
          state.debouncedTerm +
          '&' +
          baseUrl.split('&')[1],
      }));
    if (prevState.url !== this.state.url) this.fetchPeople(this.state.url);
  }

  render(): React.ReactNode {
    const { data, term, isLoading, url } = this.state;

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
      this.setState(state => ({ ...state, term: event.target.value.trim() }));
      this.debounced(event.target.value.trim());
    };

    const handleInputFocus = () =>
      this.setState(state => ({ ...state, showList: true }));

    const prevPageResults = () =>
      this.setState(state => ({
        ...state,
        url: data?.previous ?? url,
      }));

    const nextPageResults = () =>
      this.setState(state => ({
        ...state,
        url: data?.next ?? url,
      }));

    Math.ceil(data?.count! / 10);

    return (
      <div className="flex flex-col gap-4 p-4">
        <input
          value={term}
          onChange={handleSearch}
          onFocus={handleInputFocus}
          className="rounded-xl max-w-md h-10 self-center border border-1 border-black outline-none p-3"
        />
        <div className="flex flex-col">
          {isLoading ? (
            <div className="text-center">Загрузка...</div>
          ) : data?.results?.length === 0 ? (
            <div className="text-center">
              По запросу {this.state.term} ничего не найдено
            </div>
          ) : (
            <ul className="grid grid-cols-4 grid-rows-2 gap-6">
              {data?.results?.map(result => (
                <div key={result.name}>
                  <PersonCard {...result} />
                </div>
              ))}
            </ul>
          )}
        </div>
        {!isLoading && data?.results.length !== 0 && (
          <div className="flex justify-between">
            <NavigateButton
              disabled={!data?.previous}
              onClick={prevPageResults}
            >
              {'<'}
            </NavigateButton>
            {data &&
              Array.from({ length: Math.ceil(data?.count / 10) }).map(
                (_, index) => (
                  <NavigateButton
                    key={index}
                    className={
                      this.state.page === index + 1
                        ? 'bg-[#92f779] hover:bg-[#3f7027]'
                        : ''
                    }
                    onClick={() =>
                      this.setState(state => ({ ...state, page: index + 1 }))
                    }
                  >
                    {index + 1}
                  </NavigateButton>
                ),
              )}
            <NavigateButton disabled={!data?.next} onClick={nextPageResults}>
              {'>'}
            </NavigateButton>
          </div>
        )}
      </div>
    );
  }
}
