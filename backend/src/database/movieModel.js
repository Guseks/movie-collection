import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  overview: String,
  poster_path: String,
  release_date: String,
  vote_average: Number,
  vote_count: Number,
  genre_ids: Array,
});

export const Movie = mongoose.model("Movie", movieSchema);

