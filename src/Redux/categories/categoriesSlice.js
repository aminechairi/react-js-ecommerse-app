import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../Config/config';

// Async thunk to fetch categories from the API
export const fetchCategories = createAsyncThunk('categories/fetchCategories',async () => {
  const getCategories = await fetch(`${API_BASE_URL}/api/v1/categories`);
  const categories = await getCategories.json();
  return categories;
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;