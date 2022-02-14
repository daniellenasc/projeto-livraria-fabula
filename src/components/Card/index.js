import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export function ImgMediaCard(props) {

  return (
    <Card sx={{ maxWidth: 300 }}>

      <CardMedia 
        component="img"
        alt="book-cover"
        item xs={2}
        //image="https://images-na.ssl-images-amazon.com/images/I/41UBaYAAeNS.jpg"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {/* Dubliners */}
         {props.title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {/* James Joyce */}
         {props.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {/* 12.99 */}
          {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Detalhes
           {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Aqui vamos ter 3 links, dois buttons e um link para detalhes de livros */}
        <Button size="small">Detalhes</Button>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

