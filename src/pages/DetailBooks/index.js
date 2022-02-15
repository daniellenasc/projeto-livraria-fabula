 import {useState, useEffect} from 'react';
 import axios from 'axios'; 
 import { useParams } from 'react-router-dom';
 import Typography from '@mui/material/Typography';
 import './Detail.css'


export function DetailBooks(){


    const [bookDetail, setBookDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        async function fetchBooksDetail(){
                try {
                    const result = await axios.get(`https://ironrest.herokuapp.com/livrariaFabula/${id}`)
                    console.log(result.data)
                     setBookDetail({...result.data})
                } catch (error){
                    console.log(error)
                }
        }

        fetchBooksDetail()
    },[id])

               
               return(
                   
                   <div className='detail' key={bookDetail._id}>
                   
                      <img 
                      src={bookDetail.image}
                      alt={bookDetail.title}
                      className='detailImg'
                      />
        
                      <div className=''>
        
                           <h1>{bookDetail.title}</h1>
        
                           <p>Autor: {bookDetail.author}</p>
        
                         
                            <span>Preço: {bookDetail.price}</span>
                           
        
                           <article>Descrição: {bookDetail.description}</article>

                
        
                      </div>

                        

                   </div>
               ) 
        
        
    
    
}
  
