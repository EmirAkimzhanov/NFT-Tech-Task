import axios from 'axios'
import {  nftReducer,
    getAllNftSucces,
    getNftDetail,} from '../slices/nft'


const API = `https://api.opensea.io/api/v1/assets?format=json`;

export const fetchNft=()=>async(dispatch)=>{

    try {
        const { data } = await axios.get(`${API}` );
        dispatch(getAllNftSucces(data));
      } catch (error) {
        console.log(error);
      }
};