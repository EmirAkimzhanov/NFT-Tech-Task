const initialState = {
    nfts: [] ,
    nft: null,
    loading: false,
    error: null,
};

export const nftReducer = (state = initialState, action) => {
   switch(action.type) {
    case "GET_NFT_SUCCCES": 
       return { ...state,  
        nfts: action.payload,
        loading : false
    }
    case "GET_ONE_NFT_SUCCESS": 
    return { ...state, nft: action.payload ,loading : false}
    case "FETCH_NFT_LOADING": 
    return { ...state, loading: true}
    case "FETCH_NFT_ERROR": 
    return { ...state, error: action.payload, loading : false}
    default: 
    return state
   }
}

