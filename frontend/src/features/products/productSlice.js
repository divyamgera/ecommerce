import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";
// import api from "api";

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async ({ keyword, page = 1 }, { rejectWithValue }) => {
    try {
      const link = keyword
        ? `/api/v1/products?keyword=${encodeURIComponent(keyword)}&page=${page}`
        : `/api/v1/products?page=${page}`;
      // const link = "/api/v1/products";
      const { data } = await api.get(link);
      // console.log("Response", data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An ERROR OCCURED");
    }
  }
);

// Product Details

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const link = `/api/v1/product/${id}`;
      const { data } = await api.get(link);
      // console.log("Response", data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "An EROR OCCURED");
    }
  }
);

// Submit Review
export const createReview = createAsyncThunk(
  "product/createReview",
  async ({ rating, comment, productId }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.put(
        "/api/v1/review",
        { rating, comment, productId },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message?.data || "An error occurred");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productCount: 0,
    loading: false,
    error: null,
    product: null,
    resultsPerPage: 0,
    totalPages: 0,
    reviewSuccess: false,
    reviewLoading: false,
  },

  reducers: {
    removeError: (state) => {
      state.error = null;
    },
    removeSuccess: (state) => {
      state.reviewSuccess = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload.products;
        state.productCount = action.payload.productCount;
        state.totalPages = action.payload.totalPages;
        state.resultsPerPage = action.payload.resultsPerPage;
        // console.log('Fulfilled case', action.payload)
      })

      .addCase(getProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An EROrR OCcURED IN GET PRODUCT";
        state.products = [];
      });

    builder
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProductDetails.fulfilled, (state, action) => {
        console.log("Product Details", action.payload);
        state.loading = false;
        state.error = null;
        state.product = action.payload.product;
      })

      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    builder
      .addCase(createReview.pending, (state) => {
        state.reviewLoading = true;
        state.error = null;
      })

      .addCase(createReview.fulfilled, (state, action) => {
        state.reviewLoading = false;
        state.reviewSuccess = true;
      })

      .addCase(createReview.rejected, (state, action) => {
        state.reviewLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { removeError, removeSuccess } = productSlice.actions;
export default productSlice.reducer;
