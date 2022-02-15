import * as React from 'react';


import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Edit.css'

import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export function EditBook(){

    const params = useParams()
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title:'',
        author: '',
        price: null,
        description: '',
        image: '',
    });


    useEffect(() => {
        async function fetchBooks(){
            try{
                const response = await axios.get(`https://ironrest.herokuapp.com/livrariaFabula/${params.id}`);
                setForm({...response.data})
            } catch(error){
                console.log(error);
            }
        }

        fetchBooks()
    }, [params.id]);


        function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
    
        for (let key in form) {
          if (!form[key]) {
            window.alert(`Gentileza preencher o campo ${key} corretamente`);
            return;
          }
        }
    
        delete form._id;
        axios
          .put(`https://ironrest.herokuapp.com/livrariaFabula/${params.id}`, form)
          .then((response) => navigate(`/livros`))
          .catch((error) => {
            console.error(error);
          });
      }




    return (
        <div className="form-control">
        <form onSubmit={handleSubmit}>
              <FormControl >
                   <FormHelperText id="my-helper-text">Preencha o nome completo do livro</FormHelperText>
                    <TextField
                        id="title"
                        name="title"
                        label="Book title"
                        type="text"
                        value={form.title}
                        onChange={handleChange}
                        />
                    <FormHelperText id="my-helper-text">Preencha o nome do autor</FormHelperText>
                    <TextField
                        id="author-input"
                        name="author"
                        label="Book Author"
                        type="text"
                        value={form.author}
                        onChange={handleChange}
                        />
                    <FormHelperText id="my-helper-text">Preencha o preço do livro com ponto</FormHelperText>
                    <TextField
                        id="price-input"
                        name="price"
                        type="number"
                        value={form.price}
                      onChange={handleChange}
                        />
                    <FormHelperText id="my-helper-text">Preencha a descrição do livro</FormHelperText>
                    <TextField
                        id="description-input"
                        name="description"
                        label="Book description"
                        type="text"
                        value={form.description}
                        onChange={handleChange}
                        />
                    <FormHelperText id="my-helper-text">Insira a capa do livro</FormHelperText>
                    <TextField
                        id="img-input"
                        name="image"
                        label="Book Cover"
                        value={form.image}
                        onChange={handleChange}
                        />
                    <Button type="submit">Editar livro</Button> 
            </FormControl>

        </form>
            
        </div>
      
    )
}

