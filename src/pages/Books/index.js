import {ImgMediaCard} from '../../components/Card';
import './styles.css'
import { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'



export function Books() {

  
    
    const [book, setBook] = useState([])
    const params = useParams()
    const [render, setRender] = useState(true);

    useEffect(() => {
        async function fetchBooks(){
             try {
               
               const result = await axios.get('https://ironrest.herokuapp.com/livrariaFabula')
               
               setBook([...result.data]);
             } catch (error){
                 console.log(error)
             }
         }
         
         fetchBooks();
         setRender(false)
     }, [render])



    return (
        <div className="cards">
        
        {book.filter((currentBook) => {
          return currentBook.id === params.id;
        })
        .map((currentBook) => {
                            return <ImgMediaCard 
                            key={currentBook._id}
                            setRerender={setRender}
                            id={currentBook._id}
                            tittle={currentBook.tittle}
                            author={currentBook.author} 
                            price={currentBook.price}
                            image={currentBook.image} />
                        })}
        
        </div>
    )
}



