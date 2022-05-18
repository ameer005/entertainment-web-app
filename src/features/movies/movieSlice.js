import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieDpApi from "../../apis/movieDpApi";

export const fetchTrendings = createAsyncThunk(
  "movies/fetchTrendings",
  async () => {
    const { data } = await movieDpApi.get("/trending/all/day");

    return data;
  }
);

const initialState = {
  trendings: {
    trendingList: {},
    status: null,
  },
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
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

    // FETCHING ALL MOVIES
  },
});

export default movieSlice.reducer;
