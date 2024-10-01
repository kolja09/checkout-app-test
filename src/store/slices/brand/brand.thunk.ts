import { createAsyncThunk } from "@reduxjs/toolkit";

import { getBrand } from "../../../api/brand";

import { GET_BRAND } from "./consts";

export const getBrandThunk = createAsyncThunk(
  GET_BRAND,
  async ({ onError, onSuccess }: IThunkApi) => {
    try {
      const { data } = await getBrand();

      onSuccess && onSuccess(data);

      return data;
    } catch (e: any) {
      onError && onError(e);
    }
  }
);
