import api from "./api";

export const getBrand = () => {
  return api.get("/brand");
};
