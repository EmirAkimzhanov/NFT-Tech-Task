import axios from 'axios'


const API = `https://api.opensea.io/api/v1/assets?format=json`;
const DETAIL_API = `https://api.opensea.io/api/v1/asset/`

export const fetchNft=()=>async(dispatch)=>{

    try {
         dispatch({
          type: "FETCH_NFT_LOADING"
         });
        const { data } = await axios.get(`${API}` );
        console.log(data);
        setTimeout(() => {

          dispatch({
            type: "GET_NFT_SUCCCES",
            payload: data.assets
          });
        }, 500)
      } catch (error) {
        console.log(error);
      }
};

export const fetchNftDetail=(id)=>async(dispatch )=>{

  try {
    dispatch({
      type: "FETCH_NFT_LOADING",
    });
      const { data } = await axios.get(`${DETAIL_API}/${id}` );
      console.log(data);
      setTimeout(() => {
        dispatch({
          type:'GET_ONE_NFT_SUCCESS',
          payload:data,
        });
      }, 500)
    } catch (error) {
      console.log(error);
    }
};