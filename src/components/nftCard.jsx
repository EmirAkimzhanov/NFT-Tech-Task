import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function NftCard({item}) {
  const navigate = useNavigate();
  return (
    <Card data-aos="flip-left"  sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        image={item.image_url || 'https://tse1.mm.bing.net/th?id=OIP.TUDe74-_OR6O3P4V-3_FYQHaE7&pid=Api&P=0'}
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <Typography variant="body">Created Date:</Typography>
            {item.collection.created_date}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate(`details/${item.asset_contract.address}/${item.token_id}/`)}>More</Button>
       
      </CardActions>
    </Card>
  );
}
