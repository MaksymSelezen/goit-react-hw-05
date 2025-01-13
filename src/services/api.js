import axios from "axios";
// const API_KEY = '755e93f2f2d052187e98e8094e446d4f';
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTcxNzZiMTRhNTdkMGIyNjgwYmFlZDA0Y2JmMjljZSIsIm5iZiI6MTczNjcxMzg0MS44NDA5OTk4LCJzdWIiOiI2Nzg0MjY3MTIyNTYwMjNkZmQ0ZTUzYzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lI4aUY2mMtZhd3P-Fih59JJdbE-y6_m5qcoOdHsE4f0";

axios.defaults.headers.common["Authorization"] = `Bearer ${ACCESS_TOKEN}`;
axios.defaults.params = {
  language: "en-US",
};
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};
export const fetchDetailsMovies = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};
export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);

  return data;
};
export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);

  return data;
};
export const fetchSearchMovies = async (query) => {
  const { data } = await axios.get(`search/movie`, { params: { query } });

  return data.results;
};
