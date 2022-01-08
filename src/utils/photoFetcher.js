import axios from "axios";
import { apiKey } from "../data/constants";

export const photoFetcher = async (page = 1, limit = 9) => {
  let url = "";

  let initialDate = limit * (page - 1) + 1;
  const finalDate = limit * page;

  url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-${initialDate}&end_date=2021-12-${finalDate}`;

  const data = await axios.get(url);

  return data;
};
