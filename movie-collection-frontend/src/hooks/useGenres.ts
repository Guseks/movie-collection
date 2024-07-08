const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";
import axios from "axios";

const useGenres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getGenres() {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/genre/movie/list?`,
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
      }
      const response = await axios.request(options);
      setGenres(response.data.genres);
    }
    getGenres();
  }, []);

  return { genres, setGenres };
};

export default useGenres;
