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
  },
});

export const { addBookmark, deleteBookmark } = movieSlice.actions;

export default movieSlice.reducer;
