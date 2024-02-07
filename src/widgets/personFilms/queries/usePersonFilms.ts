import { useQueries } from "@tanstack/react-query";
import { ReactQueryKeys } from "../../../shared/lib/react-query";
import { getFilm } from "../api";

export function usePersonFilms(urls: string[]) {
  return useQueries({ queries: urls.map(url => ({ queryKey: [ReactQueryKeys.films, url], queryFn: () => getFilm(url) })), combine: (results) => ({ data: results.map(res => res.data) }) });
}