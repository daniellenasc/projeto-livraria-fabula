import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostNewBook.css";

export function PostNewBook() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    image: "",
    title: "",
    author: "",
    price: 0,
    description: "",
  });

  function handleChange(event) {
    // create the form for the POST request
    setForm({ ...form, [event.target.name]: event.target.value });
    //console.log(form);
  }

  async function handleSubmit(event) {
    // <= Handler Function (para o botão do Formulário!)

    // prevent page reload on submit
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Favor, preencher o campo ${key} corretamente.`);
        return;
      }
    }

    try {
      await axios.post("https://ironrest.cyclic.app/fabula", form); // to request and sent the input data stored in the state
      navigate(`/livros`); // Navigate to the `/livros` page
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <FormControl className="form_margin_bottom">
          <FormHelperText id="my-helper-text" className="form_margin_bottom">
            Preencha o nome completo do livro
          </FormHelperText>
          <TextField
            id="title"
            name="title"
            label="Título"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" className="form_margin_bottom">
            Preencha o nome do autor
          </FormHelperText>
          <TextField
            id="author"
            name="author"
            label="Autor"
            type="text"
            value={form.author}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" className="form_margin_bottom">
            Preencha o preço do livro com ponto
          </FormHelperText>
          <TextField
            id="price"
            name="price"
            label="Preço"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" className="form_margin_bottom">
            Preencha a descrição do livro
          </FormHelperText>
          <TextField
            id="description"
            name="description"
            label="Descrição"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" className="form_margin_bottom">
            Insira a capa do livro
          </FormHelperText>
          <TextField
            id="image"
            name="image"
            label="Capa"
            value={form.img}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            style={{ marginTop: "15px" }}
            type="submit"
          >
            Cadastrar livro
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
