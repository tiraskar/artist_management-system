// import instance from "@/utils/axiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// import axios from "axios";


export const loginUser = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signin`,
        user, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      console.log('response data', response.data);

      return response.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({

  name: 'auth',

  initialState: {
    loading: false,
    error: null,
    isLoggedIn: false,
    userInfo: null,
    accessToken: null,

  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.accessToken = null;
      setTimeout(() => {
        window.location.href('/login');
      }, 200);
    }
  },

  extraReducers: (builder) => {
    //login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        toast.success("Logged in successfully.");
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = action.payload.user;
        state.accessToken = action.payload.accessToken;
        setTimeout(() => {
          window.location.href = '/';
        }, 200);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        if (action?.payload?.message) toast.error(action?.payload?.message);
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;