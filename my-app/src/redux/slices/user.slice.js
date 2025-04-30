"use client"

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { 
  fetchUsersThunk,
  fetchInstructorsThunk,
  fetchStudentsThunk,
  updateProfilePictureThunk,
  getUserThunk,
  editUserThunk,
  deleteUserThunk,
  createUserThunk,
  deactivateUserThunk,
  activateUserThunk,
  archiveUserThunk,
  getVisitingUserInfoThunk
 } from "../thunks/user.thunk";



const initialState = {
  isLoading: false,
  error: null,
  msg: null,
  user: {},
  users: [],
  current_user_Ip_country_code: null,
  instructors:[],
  students: [],
};



// ===================================charles==============
export const getVisitorIpAndInfo = createAsyncThunk(
  "api/getVisitorIpAndInfo",
   async (data, { rejectWithValue }) => {
     try {
       return await getVisitingUserInfoThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const fetchUsers = createAsyncThunk(
  "api/fetchUsers",
   async (data, { rejectWithValue }) => {
     try {
        const token = data?.token
       return await fetchUsersThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const fetchInstructors = createAsyncThunk(
  "api/fetchInstructors",
   async (token, { rejectWithValue }) => {
     try {

       return await fetchInstructorsThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
export const fetchStudents = createAsyncThunk(
  "api/fetchStudents",
   async (token, { rejectWithValue }) => {
     try {
       return await fetchStudentsThunk(token);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const getUser = createAsyncThunk(
  "api/getUser",
   async (data, { rejectWithValue }) => {
     try {
       return await getUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const activateUser = createAsyncThunk(
  "api/activateUser",
   async (data, { rejectWithValue }) => {
     try {
       return await activateUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

export const deactivateUser = createAsyncThunk(
  "api/deactivateUser",
   async (data, { rejectWithValue }) => {
     try {
       return await deactivateUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 

 export const createUser = createAsyncThunk(
  "api/createUser",
   async (data, { rejectWithValue }) => {
     try {
       return await createUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

 export const updateProfileImg = createAsyncThunk(
  "api/updateProfileImg",
   async (data, { rejectWithValue }) => {
     try {
       return await updateProfilePictureThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 
 
 export const deleteUser = createAsyncThunk(
  "api/deleteUser",
   async (data, { rejectWithValue }) => {
     try {
       return await deleteUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );

 export const archiveUser = createAsyncThunk(
  "api/archiveUser",
   async (data, { rejectWithValue }) => {
     try {
       return await archiveUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 
 export const editUser= createAsyncThunk(
  "api/editUser",
   async (data, { rejectWithValue }) => {
     try {
       return await editUserThunk(data);
     } catch (error) {
       return rejectWithValue(error.response.data);
     }
   }
 );
 




const user_slice = createSlice({
  name: "user_slice",
  initialState,
  reducers: {
    setCurrentUserDetail: (state, action) => {
      state.user = action.payload;
    }

  },
  extraReducers: (builder) => {
    builder
    .addCase(getVisitorIpAndInfo.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getVisitorIpAndInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.current_user_Ip_country_code = action?.payload?.country_code || null
    })
    .addCase(getVisitorIpAndInfo.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.users =  action?.payload || []
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchInstructors.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchInstructors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.instructors =  action?.payload || []
    })
    .addCase(fetchInstructors.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(fetchStudents.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchStudents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.students =  action?.payload || []
    })
    .addCase(fetchStudents.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(getUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.user =  action?.payload || {}
    })
    .addCase(getUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(editUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(editUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false
      state.user = action?.payload || {}
    })
    .addCase(editUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(updateProfileImg.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(updateProfileImg.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false
      state.user = action?.payload?.data || {}
    })
    .addCase(updateProfileImg.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(createUser.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
    .addCase(createUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(createUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
    .addCase(deleteUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(deleteUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(archiveUser.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
    .addCase(archiveUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(archiveUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(activateUser.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
    .addCase(activateUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(activateUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
    .addCase(deactivateUser.pending, (state) => {
      state.isLoading = true;
    })
    // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that is defined but not used
    .addCase(deactivateUser.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false
    })
    .addCase(deactivateUser.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
  },
});

export const {setCurrentUserDetail} = user_slice.actions;
export default user_slice.reducer;