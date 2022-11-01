import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    nft: {} ,
    nftDetail: {},
    user: null,
    loading: true,
    error: null,
};

const nftSlice = createSlice({
    name:"nft",
    initialState,
    reducers:{
        getAllNftSucces(state , action){
            state.nft = action.payload;
            state.loading = false
        },
        getNftDetail(state, action) {
            state.nftDetail = action.payload;
            state.loading = false;
          },
    }
})
const { getAllNftSucces, getNftDetail } = nftSlice.actions;

const nftReducer = nftSlice.reducer;
export {
    nftReducer,
    getAllNftSucces,
    getNftDetail,
};