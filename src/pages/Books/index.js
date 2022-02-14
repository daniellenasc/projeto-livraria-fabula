/* Aqui vamos usar o grid para fazer o map e inserir os cards 

*/

import {ImgMediaCard} from '../../components/Card';
import './styles.css'
import { useState, useEffect} from 'react';
import axios from 'axios'




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
        <div className="cards">
        
        {book.map((currentBook) => {
                            return <ImgMediaCard 
                            key={currentBook._id}
                            id={currentBook.id}
                            tittle={currentBook.tittle}
                            author={currentBook.author} 
                            price={currentBook.price}
                            image={currentBook.image} />
                        })}
        
        </div>
    )
}



