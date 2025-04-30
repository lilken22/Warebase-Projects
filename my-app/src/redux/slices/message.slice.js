"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  sendInstructorMessageThunk,
  sendSupportMessageThunk,
  sendSupportMessageByInstructorThunk,
  fetchInstructsMessagesThunk,
  fetchStudentsMessagesThunk,
  getInstructorMessagesThunk
} from "../thunks/message.thunk";
// import { act } from "react";


const initialState = {
  isLoading: false,
  error: null,
  studentMessagesForAdmin: [],
  instructorMessagesForAdmin: [],
  instructorMessagesFromStudents: []
};



// ===================================charles==============
export const sendInstructorMessage = createAsyncThunk(
  "api/sendInstructorMessage",
   async (data, { rejectWithValue }) => {
     try {
       return await sendInstructorMessageThunk(data);
     } catch (err) {
       return rejectWithValue(err?.response?.data?.message);       
     }
    //  console.log(error)
   }
 );

export const sendSupportMessage = createAsyncThunk(
  "api/sendSupportMessage",
   async (data, { rejectWithValue }) => {
     try {
       return await sendSupportMessageThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const sendSupportMessageInstructor = createAsyncThunk(
  "api/sendSupportMessageInstructor",
   async (data, { rejectWithValue }) => {
     try {
       return await sendSupportMessageByInstructorThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

 
export const fetchStudentsMessages = createAsyncThunk(
  "api/fetchStudentsMessages",
   async (token, { rejectWithValue }) => {
     try {
       return await fetchStudentsMessagesThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const getInstructorMessages = createAsyncThunk(
  "api/getInstructorMessages",
   async (token, { rejectWithValue }) => {
     try {
       return await getInstructorMessagesThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
export const fetchInstructorsMessages = createAsyncThunk(
  "api/fetchInstructorsMessages",
   async (token, { rejectWithValue }) => {
     try {
       return await fetchInstructsMessagesThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 


const message_slice = createSlice({
  name: "message_slice",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
    .addCase(sendInstructorMessage.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that it's defined but not used
    .addCase(sendInstructorMessage.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    })
    .addCase(sendInstructorMessage.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(sendSupportMessage.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that it's defined but not used
    .addCase(sendSupportMessage.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    })
    .addCase(sendSupportMessage.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(sendSupportMessageInstructor.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that it's defined but not used
    .addCase(sendSupportMessageInstructor.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    })
    .addCase(sendSupportMessageInstructor.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchStudentsMessages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchStudentsMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.studentMessagesForAdmin = action.payload.data || []
    })
    .addCase(fetchStudentsMessages.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchInstructorsMessages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchInstructorsMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.instructorMessagesForAdmin = action.payload.data || []
    })
    .addCase(fetchInstructorsMessages.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(getInstructorMessages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getInstructorMessages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.instructorMessagesFromStudents = action.payload.data || []
    })
    .addCase(getInstructorMessages.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
   
  },
});

// export const {  } = message_slice.actions;
export default message_slice.reducer;