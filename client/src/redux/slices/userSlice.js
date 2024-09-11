import instance from "@/utils/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const getUserList = createAsyncThunk(
  'user/userList',
  async (user, { rejectWithValue, getState }) => {
    try {
      const { page, limit } = getState().user;
      const query = new URLSearchParams({
        page,
        limit
      });
      const response = await instance.get(`${import.meta.env.VITE_BASE_URL}/user?${query}`);
      return response.data;
    } catch (error) {
      if (error.response.status == 403) return toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',

  initialState: {
    loading: false,
    isUserSaved: false,
    error: null,
    limit: 10,
    page: 1,
    currentPage: 1,
    usersList: []
  },

  reducers: {
  },
  extraReducers: (builder) => {
    //login user
    builder
      .addCase(getUserList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isUserSaved = false;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.users);
        state.usersList = action.payload.users;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  }
});


export default userSlice.reducer;