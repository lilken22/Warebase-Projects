import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  authenticateUserThunk, 
  signupUserThunk,
  enrollUserThunk,
  enrollUserLaterThunk,
  deauthenticateThunk,
  editUserPasswordThunk,
  updateInstructorPasswordThunk,
  forgotPasswordThunk,
  testApiThunk
} from "../thunks/auth.thunk";



const initialState = {
  isLoading: false,
  error: null,
  id: null, 
  user: {},
  access_token: null,
  refresh_token: null,
  user_role: null
};



// ===================================charles==============

export const authenticateUser = createAsyncThunk(
 "api/authenticateUser",
  async (data,{rejectWithValue}) => {
    try {
        const object = {
            email: data?.email,
            password: data?.password
        }
      const result  = await authenticateUserThunk(object);
      return result;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const testApiCalls = createAsyncThunk(
 "api/testApiCalls",
  async (_, { rejectWithValue }) => {
    try {
      return await testApiThunk();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
 "api/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      return await deauthenticateThunk();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserPassword = createAsyncThunk(
 "api/updateUserPassword",
  async (data, { rejectWithValue }) => {
    try {
      return await editUserPasswordThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateInstructorPassword = createAsyncThunk(
 "api/updateInstructorPassword",
  async (data, { rejectWithValue }) => {
    try {
      return await updateInstructorPasswordThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
 "api/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      return await forgotPasswordThunk(email);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signUpUser= createAsyncThunk(
 "api/signUpUser",
  async (data, { rejectWithValue }) => {
    try {
      return await signupUserThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);




const auth_slice = createSlice({
  name: "auth_slice",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.user = action?.payload?.data|| {}
        state.access_token = action?.payload?.token || null
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
     
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.user = action.payload.data || {}
      })
      .addCase(signUpUser.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
     
      // .addCase(enrollUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(enrollUser.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = false;
      //   state.user = action?.payload?.data
      // })
      // .addCase(enrollUser.rejected, (state) => {
      //   state.isLoading = false;
      //   state.error = true;
      // })
      // .addCase(enrollUserLater.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(enrollUserLater.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = false;
      //   state.user = action?.payload?.data
      // })
      // .addCase(enrollUserLater.rejected, (state) => {
      //   state.isLoading = false;
      //   state.error = true;
      // })
     
      // .addCase(logoutUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(logoutUser.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = false;
      //   state.user = {}
      //   state.id = null
      //   state.user_role = null
      //   state.access_token = null
      //   state.refresh_token = null
      // })
      // .addCase(logoutUser.rejected, (state) => {
      //   state.isLoading = false;
      // })

      // .addCase(updateUserPassword.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateUserPassword.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = false;
      // })
      // .addCase(updateUserPassword.rejected, (state) => {
      //   state.isLoading = false;
      // })
      
      // .addCase(updateInstructorPassword.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateInstructorPassword.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = false;
      // })
      // .addCase(updateInstructorPassword.rejected, (state) => {
      //   state.isLoading = false;
      // })
  },
});

export const { } = auth_slice.actions;
export default auth_slice.reducer;