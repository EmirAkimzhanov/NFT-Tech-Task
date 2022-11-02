import { Button, CardMedia, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAction } from '../hooks';
import Loader from '../Loader';

const Nftdetail = () => {
    const {id , token_id} = useParams();
    const {fetchNftDetail} = useAction();
    console.log(id);
    const { loading, nft} = useSelector((state) => state.nft);

    useEffect(() => {
        fetchNftDetail(`${id}/${token_id}`);
      }, []);

     const navigate = useNavigate()
      console.log(nft);
      if(loading || !nft)return <Loader/>
    return (
        <Paper elevation={24} sx={{width:"80%" , heigth:"70%" , margin:"5% auto" , display:"flex" , borderRadius:"20px"  }} className="paper">
           <img src={nft.image_url || 'https://www.creavea.com/produits/82320-l/image-3d-divers-zen-n2-30-x-30-cm-l.jpg' } style={{height:"100%" , padding:"5%" ,boxShadow:"20%"}}/>
           <Box sx={{display:"flex" , flexDirection:"column" , alignContent:"flex-end"}}>
            <Typography sx={{fontSize:"3vw" , paddingTop:"15%"}}>
                {nft.name}
            </Typography>
            <Typography sx={{fontSize:"2vw" , paddingTop:"3%"}}>
                {nft.asset_contract.asset_contract_type}
            </Typography>
            <Typography sx={{fontSize:"2vw" , paddingTop:"3%"}}>
                {nft.asset_contract.schema_name}
            </Typography>
            <Button onClick={()=>navigate('/')} sx={{color:"black"  , width:"10%" ,height:"10%", borderRadius:"50%" , marginTop:"auto%" }}>
                <Typography sx={{fontSize:"4vw" , color:"blue" , top:"50%" , left:"50%"}}>←</Typography>
            </Button>
           </Box>
        </Paper>
    );
};

export default Nftdetail;