import { IPerson } from "../../../entities/person/types";

export interface ISearchResponse {
  count: number,
  next: string,
  previous: string | null,
  results: IPerson[]
}

export interface ISearchState {
  url: string
  page: number
  term: string;
  debouncedTerm: string;
  data: ISearchResponse | undefined;
  isLoading: boolean;
}