import { createSlice } from "@reduxjs/toolkit";

import { CategoriesStateType, TBrandData } from "./brand.types";
import { getBrandThunk } from "./brand.thunk";

const initialState: CategoriesStateType = {
  brand: null,
  activeTab: 1,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: { payload: number }) => {
      state.activeTab = payload;
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

export const { setActiveTab } = brandSlice.actions;

export default brandSlice.reducer;
