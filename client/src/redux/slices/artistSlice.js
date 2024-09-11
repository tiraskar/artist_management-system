import instance from "@/utils/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const createArtist = createAsyncThunk(
  'artist/create',
  async (artistData, { rejectWithValue }) => {
    try {
      const response = await instance.post('/artist', artistData);
      return response.data;
    } catch (error) {
      toast.dismiss();
      if (error.response.status == 403) return toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchArtistList = createAsyncThunk(
  'artist/artistList',
  async (artist, { rejectWithValue, getState }) => {
    try {
      const { page, limit } = getState().artist;
      const query = new URLSearchParams({
        page: Number(page),
        limit: Number(limit)
      });
      const response = await instance.get(`/artist?${query}`);
      return response.data;
    } catch (error) {
      toast.dismiss();
      if (error.response.status == 403) return toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
)

const artistSlice = createSlice({
  name: 'artist',

  initialState: {
    loading: false,
    isFetchingArtist: false,
    error: null,
    isArtistSaved: false,
    page: 1,
    limit: 10,
    currentPage: 1,
    artistList: []

  },

  reducers: {
    // handlePageChange(state, action) {

    // }
  },

  extraReducers: (builder) => {
    //create artist
    builder
      .addCase(createArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isArtistSaved = false;
      })
      .addCase(createArtist.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isArtistSaved = true;
        if (action?.payload?.message) toast.success(action.payload.message);
      })
      .addCase(createArtist.rejected, (state, action) => {
        state.loading = false;
        state.isArtistSaved = false;
        state.error = action.payload.message;
      });
    //get artist list
    builder
      .addCase(fetchArtistList.pending, (state) => {
        state.isFetchingArtist = true;
        state.error = null;
      })
      .addCase(fetchArtistList.fulfilled, (state, action) => {
        state.isFetchingArtist = false;
        if (action?.payload?.artists) {
          state.artistList = action.payload.artists;
        } else {
          state.artistList = [];
        }

      })
      .addCase(fetchArtistList.rejected, (state, action) => {
        state.isFetchingArtist = false;
        state.error = action.payload.message;
      });
  }
});

export default artistSlice.reducer; 