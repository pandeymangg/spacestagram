import axios from "axios";
import { apiKey } from "../data/constants";

export const photoFetcher = async (page = 1) => {
  let url = "";
  if (page === 1) {
    url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-01&end_date=2021-12-09`;
  }

  if (page === 2) {
    url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-10&end_date=2021-12-18`;
  }

  if (page === 3) {
    url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-12-19&end_date=2021-12-27`;
  }

  const data = await axios.get(url);

  return data;
};
