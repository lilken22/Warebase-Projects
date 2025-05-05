import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchPropertiesThunk,
  createPropertyThunk,
} from "../thunks/property.thunk";

const initialState = {
  isLoading: false,
  error: null,
  mesaage: null,
  properties: [],
};

// ===================================charles==============
export const fetchProperties = createAsyncThunk(
  "api/fetchProperties",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchPropertiesThunk();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getBlog = createAsyncThunk(
//   "api/getBlog",
//   async (blog_id, { rejectWithValue }) => {
//     try {
//       return await getBlogThunk(blog_id);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const createProperty = createAsyncThunk(
  "api/createProperty",
  async (data, { rejectWithValue }) => {
    try {
      return await createPropertyThunk(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const deleteBlog = createAsyncThunk(
//   "api/deleteBlog",
//   async (data, { rejectWithValue }) => {
//     try {
//       return await deleteBlogThunk(data);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const editBlog = createAsyncThunk(
//   "api/editBlog",
//   async (data, { rejectWithValue }) => {
//     try {
//       return await editBlogThunk(data);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// export const makeFeaturedBlog = createAsyncThunk(
//   "api/makeFeaturedBlog",
//   async (data, { rejectWithValue }) => {
//     try {
//       return await createFeaturedBlogThunk(data);
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const property_slice = createSlice({
  name: "property_slice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.properties = action?.payload?.data || [];
        state.mesaage = action?.payload?.message;
      })
      .addCase(fetchProperties.rejected, (state) => {
        state.isLoading = false;
      })

    //   .addCase(getBlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getBlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = false;
    //     state.blog = action?.payload?.data || {};
    //     state.mesaage =
    //       action?.payload?.message ||
    //       "Single blog details fetched successfully";
    //   })
    //   .addCase(getBlog.rejected, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(makeFeaturedBlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(makeFeaturedBlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = false;
    //   })
    //   .addCase(makeFeaturedBlog.rejected, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(deleteBlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteBlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = false;
    //   })
    //   .addCase(deleteBlog.rejected, (state) => {
    //     state.isLoading = false;
    //   })
      .addCase(createProperty.pending, (state) => {
        state.isLoading = true;
      })
      // i removed this action text that will be after the state because it not allowing the code to push on git hub it's bringing an error (action) the error is that action is defined but not used
      .addCase(createProperty.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(createProperty.rejected, (state) => {
        state.isLoading = false;
      })
    //   .addCase(editBlog.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(editBlog.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = false;
    //   })
    //   .addCase(editBlog.rejected, (state) => {
    //     state.isLoading = false;
    //   });
  },
});

// export const {} = property_slice.actions;
export default property_slice.reducer;
