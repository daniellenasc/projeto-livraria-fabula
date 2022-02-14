/* Aqui vamos usar o grid para fazer o map e inserir os cards 

*/
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {ImgMediaCard} from '../../components/Card';
import { useState, useEffect} from 'react';
import axios from 'axios'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function Books() {

    
    const [book, setBook] = useState([])


    useEffect(() => {
        async function fetchBooks(){
             try {
               
               const result = await axios.get('https://ironrest.herokuapp.com/livrariaFabula')
                console.log(result.data)
               setBook([...result.data]);
             } catch (error){
                 console.log(error)
             }
         }
         
         fetchBooks();
      
     }, [])



    return (
        <div >
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                <Item>
                        {book.map((currentBook) => {
                            return <ImgMediaCard 
                            key={currentBook._id}
                            id={currentBook.id}
                            tittle={currentBook.tittle}
                            author={currentBook.author} 
                            price={currentBook.price}
                            image={currentBook.image} />
                        })}

                </Item>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
}




