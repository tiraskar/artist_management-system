import session from "@/utils/session";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


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
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signup`,
        user, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
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
        window.location.replace('/login');
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
        session.setValue('token', action.payload.accessToken);
        setTimeout(() => {
          window.location.replace('/');
        }, 200);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        if (action?.payload?.message) toast.error(action?.payload?.message);
      });
    //register user 
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        toast.success("User registered successfully...");
        setTimeout(() => {
          window.location.replace('/login');
        }, 400);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        if (action?.payload?.message) toast.error(action?.payload?.message);
      })
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;