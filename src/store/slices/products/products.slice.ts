import { createSlice } from "@reduxjs/toolkit";

import { CategoriesStateType, TBrandData } from "./products.types";
import { getBrandThunk } from "./products.thunk";

const initialState: CategoriesStateType = {
  brand: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getBrandThunk.fulfilled,
      (state, { payload }: { payload: TBrandData }) => {
        state.brand = payload;
      }
    );
  },
});

export default productsSlice.reducer;
