import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  sendContactMessageThunk,
  sendExploreMessageThunk,
  subscribeNewsletterThunk
} from "../thunks/message.thunk";
import { data } from "react-router-dom";
// import { act } from "react";


const initialState = {
  isloading: false,
  error: null,
};



// ===================================charles==============
export const sendContactMessage = createAsyncThunk(
  "message/contact",
  async (data, { rejectWithValue }) => {
    try {
      const res = await sendContactMessageThunk(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendExploreMessage = createAsyncThunk(
  "message/explore",
  async (data, { rejectWithValue }) => {
    try {
      const res = await sendExploreMessageThunk(data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const subscribeNewsletter = createAsyncThunk(
  "message/subscribe",
  async (emailData, { rejectWithValue }) => {
    try {
      const res = await subscribeNewsletterThunk(emailData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


const message_slice = createSlice({
  name: "message_slice",
  initialState,
  reducers: {
    resetMessageState: (state) => {
      state.isloading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(sendContactMessage.pending, (state) => {
      state.isloading = true;
    })
    .addCase(sendContactMessage.fulfilled, (state) => {
      state.isloading = false;
      state.error = false;
    })
    .addCase(sendContactMessage.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(sendExploreMessage.pending, (state) => {
      state.isloading = true;
    })
    .addCase(sendExploreMessage.fulfilled, (state) => {
      state.isloading = false;
      state.error = false;
    })
    .addCase(sendExploreMessage.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
    .addCase(subscribeNewsletter.pending, (state) => {
      state.isloading = true;
    })
    .addCase(subscribeNewsletter.fulfilled, (state) => {
      state.isloading = false;
      state.error = false;
    })
    .addCase(subscribeNewsletter.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    })
  },
});

export const { resetMessageState } = message_slice.actions;
export default message_slice.reducer;