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

const artistSlice = createSlice({
  name: 'artist',

  initialState: {
    loading: false,
    error: null,
    isArtistSaved: false
  },

  reducers: {
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
  }
});

export default artistSlice.reducer; 