import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAction, useAppSelector } from '../hooks';
import NftCard from './nftCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useSearchParams} from 'react-router-dom'
const TestPage = () => {


    const {fetchNft} = useAction();
    const state = useAppSelector((state) => state.nft.nft.assets);
    useEffect(() => {
        fetchNft();
      }, []);


   

console.log(state);





    return (
        <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
            {state?.map((item)=>(
                <NftCard key={item.id} item={item} sx={{width:"20%"}} />
            ))}
              
        </div>
    );
};

export default TestPage;