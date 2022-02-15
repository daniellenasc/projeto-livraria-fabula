import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './contact.css'

export function Contact() {
  return (
    <> 
    <div className="card_contact"> 
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://avatars.githubusercontent.com/u/49723634?v=4"
          alt="Camila Beisiegel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Camila Beisiegel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            E-mail: danielle_nascimento_@hotmail.com
            <CardActions>                
              <Button size="medium"><a href="https://github.com/CPBeisiegel"  style={{ textDecoration: "none"}}> GitHub </a></Button>
            </CardActions>            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://avatars.githubusercontent.com/u/88454672?v=4"
          alt="Danielle Nascimento"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Danielle Nascimento
          </Typography>
          <Typography variant="body2" color="text.secondary">
            E-mail: danielle_nascimento_@hotmail.com            
            <CardActions>                
              <Button size="medium"><a href="https://github.com/daniellenasc"  style={{ textDecoration: "none"}}> GitHub </a></Button>
            </CardActions>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>  
  );
}