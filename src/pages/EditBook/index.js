import * as React from "react";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Edit.css";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function EditBook() {
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    price: 0,
    description: "",
    image: "",
  });

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(
          `https://ironrest.cyclic.app/fabula/${params.id}`
        );
        setForm({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchBooks();
  }, [params.id]);

  function handleChange(event) {
    if (event.target.name === "price") {
      setForm({ ...form, [event.target.name]: Number(event.target.value) });
      return;
    }

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
      .put(`https://ironrest.cyclic.app/fabula/${params.id}`, form)
      .then((response) => navigate(`/livros`))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="form-control-edit">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormHelperText id="my-helper-text" style={{ marginBottom: "20px" }}>
            Preencha o nome completo do livro
          </FormHelperText>
          <TextField
            id="title"
            name="title"
            label="Titulo"
            type="text"
            value={form.title}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" style={{ marginBottom: "20px" }}>
            Preencha o nome do autor
          </FormHelperText>
          <TextField
            id="author-input"
            name="author"
            label="Autor"
            type="text"
            value={form.author}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" style={{ marginBottom: "20px" }}>
            Preencha o preço do livro com ponto
          </FormHelperText>
          <TextField
            id="price-input"
            name="price"
            type="number"
            step="3"
            value={form.price}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" style={{ marginBottom: "20px" }}>
            Preencha a descrição do livro
          </FormHelperText>
          <TextField
            id="description-input"
            name="description"
            label="Descrição"
            type="text"
            value={form.description}
            onChange={handleChange}
          />
          <FormHelperText id="my-helper-text" style={{ marginBottom: "20px" }}>
            Insira a capa do livro
          </FormHelperText>
          <TextField
            id="img-input"
            name="image"
            label="Capa do Livro"
            value={form.image}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            style={{ marginTop: "15px" }}
            type="submit"
          >
            Editar livro
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
