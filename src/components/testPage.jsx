import React, { useEffect } from 'react';
import { useAction } from '../hooks';
import NftCard from './nftCard';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNft } from '../actions/nft-action';
// You can also use <link> for styles

const TestPage = () => {

    const {fetchNft} = useAction();
    const {nfts, loading} = useSelector((state) => state.nft);


    useEffect(() => {
        (fetchNft());

      }, []);





if(loading || !nfts.length) return <Loader />

console.log(nfts);

    return (
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
            { nfts.map((item)=>(
                
                <NftCard key={item.id} item={item} sx={{width:"20%"}}  />
            ))}
             
        </div>
    );
};

export default TestPage;