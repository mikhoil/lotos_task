import { useQuery } from "@tanstack/react-query";
import { ReactQueryKeys } from "../../../shared/lib/react-query";
import { getPerson } from "../api";

export function usePerson(id: string) {
  return useQuery({
    queryKey: [ReactQueryKeys.people, id],
    queryFn: () => getPerson(id),
  })
}