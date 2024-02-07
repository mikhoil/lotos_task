import React from 'react';
import { Table } from '../../../shared/ui/Table';
import { UsePersonFilmsHOC } from '../../../widgets/personFilms/ui/PersonFilms';
import { withUsePersonHOC } from '../hocs';
import { usePerson } from '../queries';

export class PersonInfo extends React.Component<
  ReturnType<typeof usePerson>,
  { homeworld: string; isHomeWorldLoading: boolean }
> {
  constructor(props: ReturnType<typeof usePerson>) {
    super(props);
    this.state = { homeworld: '', isHomeWorldLoading: false };
  }
  componentDidUpdate() {
    if (!this.props.isLoading) {
      fetch(this.props.data?.homeworld!)
        .then(response => response.json())
        .then(({ name }: { name: string }) =>
          this.setState(state => ({ ...state, homeworld: name })),
        );
    }
  }
  render(): React.ReactNode {
    const { data, isLoading } = this.props;
    return (
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold">{data?.name}</h1>
        <div className="flex flex-col items-center mt-4 gap-4">
          {isLoading ? (
            <div className="text-center">Загрузка...</div>
          ) : (
            data && (
              <Table
                fields={{
                  height: data?.height,
                  mass: data?.mass,
                  birth_year: data?.birth_year,
                  gender: data?.gender,
                  eye_color: data?.eye_color,
                  hair_color: data?.hair_color,
                  skin_color: data.skin_color,
                  homeworld: this.state.isHomeWorldLoading
                    ? 'Загрузка...'
                    : this.state.homeworld,
                }}
              />
            )
          )}
          <div className="flex flex-col ">
            {data && (
              <>
                <h2 className="text-xl font-bold text-center">Films:</h2>{' '}
                <UsePersonFilmsHOC urls={data?.films!} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const UsePersonHOC = withUsePersonHOC(PersonInfo);
