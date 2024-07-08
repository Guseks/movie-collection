import { useState, useEffect } from "react";
import axios from "axios";

interface searchOptions {
  genreID: string[];
  language: string;
  releaseDate: string;
  voteAverage: string;
  originalLanguage: string;
  includeAdult: string;
  page: string;
}

interface useMoviesProps {
  searchOptions: searchOptions;
  apiRoute: string;
}

const useMovies = ({ searchOptions, apiRoute }: useMoviesProps) => {
  const [movieList, setMovieList] = useState([]);

  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const queryParams = {
    with_genres: searchOptions.genreID.join(" | "),
    language: searchOptions.language,
    "primary_release_date.gte": searchOptions.releaseDate,
    "vote_average.gte": searchOptions.voteAverage,
    with_original_language: searchOptions.originalLanguage,
    include_adult: searchOptions.includeAdult,
  };

  const formattedParams = new URLSearchParams(queryParams).toString();
  useEffect(() => {
    async function getMovies() {
      const options = {
        method: "GET",
        url:  `${BASE_API_URL}${apiRoute}?${formattedParams}&page=${parseInt(
          searchOptions.page
        )}`,
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
      }
      const response = await axios.request(options);
      setMovieList(response.data.results);
    }
    getMovies();
  }, []);

  return { movieList, setMovieList };
};

export default useMovies;


