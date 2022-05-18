import axios from "axios";

export const IMG_URL = "https://image.tmdb.org/t/p/w500";
const key = "f07b676b2eda7809eddd4788abf9aa4a";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: key,
  },
});
