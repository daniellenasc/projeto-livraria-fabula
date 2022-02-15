 import {useState, useEffect} from 'react';
 import axios from 'axios'; 
 import { useParams } from 'react-router-dom';
 import Typography from '@mui/material/Typography';
 import { Box } from '@mui/system';

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
                      />
        
                      <div className=''>
        
                           <h1>{bookDetail.title}</h1>
        
                           <h3>{bookDetail.author}</h3>
        
                         
                            <span>{bookDetail.price}</span>
                           
        
                           <article>{bookDetail.description}</article>

                
        
                      </div>

                        

                   </div>
               ) 
        
        
    
    
}
  
