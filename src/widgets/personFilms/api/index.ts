import axios from "axios";

export async function getFilm(url: string) {
  return (await axios.get<{ title: string; episode_id: number }>(url)).data;
}