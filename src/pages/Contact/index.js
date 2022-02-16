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
    <Card className="personal_card">
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
          <i className="fa-solid fa-envelope"></i> camila.beisiegel@gmail.com                       
          </Typography>          
          <CardActions>             
          </CardActions>             
        </CardContent>
        
      </CardActionArea>
      <Button size="medium"><a href="https://github.com/CPBeisiegel"  style={{ textDecoration: "none", fontSize: "30px", color: "black" }}> <i className="fa-brands fa-github"></i> </a></Button>

    </Card>

    <Card className="personal_card">
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
          <i className="fa-solid fa-envelope"></i> danielle_nascimento_@hotmail.com           
            
          </Typography>
          
          <CardActions>                
             
            </CardActions>
        </CardContent>
       
      </CardActionArea>
      <Button size="medium"><a href="https://github.com/daniellenasc"  style={{ textDecoration: "none", fontSize: "30px", color: "black" }}> <i className="fa-brands fa-github"></i> </a></Button>
    </Card>
    </div>
    </>  
  );
}