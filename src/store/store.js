import { createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { nftReducer } from "../slices/nft";

const rootReducer = combineReducers({
  nft: nftReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk));

