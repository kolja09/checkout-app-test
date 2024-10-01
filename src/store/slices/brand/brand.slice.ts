import { createSlice } from "@reduxjs/toolkit";

import { CategoriesStateType, TBrandData } from "./brand.types";
import { getBrandThunk } from "./brand.thunk";

const initialState: CategoriesStateType = {
  brand: null,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrand(state, action: { payload: TBrandData }) {
      state.brand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getBrandThunk.fulfilled,
      (state, { payload }: { payload: TBrandData }) => {
        state.brand = payload;
      }
    );
  },
});

export const { setBrand } = brandSlice.actions;
export default brandSlice.reducer;
