import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieDpApi from "../../apis/movieDpApi";

export const fetchTrendings = createAsyncThunk(
  "movies/fetchTrendings",
  async () => {
    const { data } = await movieDpApi.get("/trending/all/day");

    return data;
  }
);

export const fetchRecommendation = createAsyncThunk(
  "movies/fetchRecommendation",
  async () => {
    const { data } = await movieDpApi.get("/discover/movie");

    return data;
  }
);

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const { data } = await movieDpApi.get("/movie/now_playing");

  return data;
});

export const fetchTvSeries = createAsyncThunk(
  "movies/fetchTvSeries",
  async () => {
    const { data } = await movieDpApi.get("/tv/on_the_air");

    return data;
  }
);

const initialState = {
  trendings: {
    trendingList: {},
    status: null,
  },

  bookmarked: [],

  recommendations: {
    recommendationList: {},
    status: null,
  },

  movies: {
    moviesList: {},
    status: null,
  },

  tvSeries: {
    tvSeriesList: {},
    status: null,
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addBookmark: (state, { payload }) => {
      state.bookmarked.push(payload);
    },
    deleteBookmark: (state, { payload }) => {
      const afterDelete = state.bookmarked.filter(
        (item) => item.id !== payload.id
      );
      state.bookmarked = afterDelete;
    },
  },
  extraReducers: {
    // FETCHING TRENDINGS
    [fetchTrendings.pending]: (state) => {
      state.trendings.status = "loading";
    },
    [fetchTrendings.fulfilled]: (state, { payload }) => {
      state.trendings.trendingList = payload;
      state.trendings.status = "success";
    },
    [fetchTrendings.rejected]: (state) => {
      state.trendings.status = "failed";
    },

    // FETCHING Recommendation
    [fetchRecommendation.pending]: (state) => {
      state.recommendations.status = "loading";
    },
    [fetchRecommendation.fulfilled]: (state, { payload }) => {
      state.recommendations.status = "success";
      state.recommendations.recommendationList = payload;
    },
    [fetchRecommendation.rejected]: (state) => {
      state.recommendations.status = "failed";
    },

    // Fetching Movies
    [fetchMovies.pending]: (state) => {
      state.movies.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.movies.status = "success";
      state.movies.moviesList = payload;
    },
    [fetchMovies.rejected]: (state) => {
      state.movies.status = "failed";
    },

    // Fetching TV Series
    [fetchTvSeries.pending]: (state) => {
      state.tvSeries.status = "loading";
    },
    [fetchTvSeries.fulfilled]: (state, { payload }) => {
      state.tvSeries.status = "success";
      state.tvSeries.tvSeriesList = payload;
    },
    [fetchTvSeries.rejected]: (state) => {
      state.tvSeries.status = "failed";
    },
  },
});

export const { addBookmark, deleteBookmark } = movieSlice.actions;

export default movieSlice.reducer;
