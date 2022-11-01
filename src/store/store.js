import { configureStore } from "@reduxjs/toolkit";
import { nftReducer } from "../slices/nft";

export const store = configureStore({
  reducer: {
    nft: nftReducer,
  },
});

