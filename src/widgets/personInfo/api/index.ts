import { IPerson } from "../../../entities/person/types";
import { axiosPeople } from "../../../shared/api/people";

export async function getPerson(id: string) {
  return (await axiosPeople.get<IPerson>(id)).data;
}