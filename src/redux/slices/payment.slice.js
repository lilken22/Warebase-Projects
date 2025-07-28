import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  initializePaymentThunk, 
  verifyPaymentThunk, 
  fetchStudentsPaymentsHistoryThunk, 
  fetchStudentsPaymentsHistoriesAdminThunk,
  fetchStudentCurrentCoursePaymentThunk
 } from "../thunks/payment.thunk";



const initialState = {
  isLoading: false,
  error: null,
  msg: null,
  selectCourse: {},
  currentStudentPayments:[],
  studentsPayments: [],
  studentCurrentCoursePaymentDetails: {}
};



// ===================================charles==============
export const initializePayment = createAsyncThunk(
  "api/initializePayment",
   async (data, { rejectWithValue }) => {
     try {
       return await initializePaymentThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const verifyPayment = createAsyncThunk(
  "api/verifyPayment",
   async (data, { rejectWithValue }) => {
     try {
       return await verifyPaymentThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const fetchStudentsPayments = createAsyncThunk(
  "api/fetchStudentsPayments",
   async (data, { rejectWithValue }) => {
     try {
       return await fetchStudentsPaymentsHistoryThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
export const fetchStudentCurrentPayment = createAsyncThunk(
  "api/fetchStudentCurrentPayment",
   async (data, { rejectWithValue }) => {
     try {
       return await fetchStudentCurrentCoursePaymentThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
export const fetchAdminPaymentsHistory = createAsyncThunk(
  "api/fetchAdminPaymentsHistory",
   async (data, { rejectWithValue }) => {
     try {
       return await fetchStudentsPaymentsHistoriesAdminThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 


const payment_slice = createSlice({
  name: "payment_slice",
  initialState,
  reducers: {
    setSelectedCourseData: (state, action) => {
      state.selectCourse = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
    .addCase(initializePayment.pending, (state) => {
      state.isLoading = true;
    })
      // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
    .addCase(initializePayment.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    })
    .addCase(initializePayment.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(verifyPayment.pending, (state) => {
      state.isLoading = true;
    })
     // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
    .addCase(verifyPayment.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(verifyPayment.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchStudentsPayments.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchStudentsPayments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.currentStudentPayments = action.payload || [];
    })
    .addCase(fetchStudentsPayments.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchStudentCurrentPayment.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchStudentCurrentPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.studentCurrentCoursePaymentDetails = action.payload || {};
    })
    .addCase(fetchStudentCurrentPayment.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchAdminPaymentsHistory.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAdminPaymentsHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.studentsPayments = action?.payload?.data || [];
    })
    .addCase(fetchAdminPaymentsHistory.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
  },
});

export const { setSelectedCourseData} = payment_slice.actions;
export default payment_slice.reducer;