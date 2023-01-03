import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Detail.css";
import { Link } from "react-router-dom";

export function DetailBooks() {
  const [bookDetail, setBookDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchBooksDetail() {
      try {
        const result = await axios.get(
          `https://ironrest.cyclic.app/fabula/${id}`
        );
        console.log(result.data);
        setBookDetail({ ...result.data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchBooksDetail();
  }, [id]);

  return (
    <div className="detail" key={bookDetail._id}>
      <img
        src={bookDetail.image}
        alt={bookDetail.title}
        className="detailImg"
      />

      <div className="detailBook">
        <h1>{bookDetail.title}</h1>

        <p>Autor: {bookDetail.author}</p>

        <span className="price">Preço: {bookDetail.price}</span>

        <article>Descrição: {bookDetail.description}</article>

        <Button variant="outlined">
          <Link style={{ textDecoration: "none" }} to={`/livros`}>
            Voltar
          </Link>
        </Button>
      </div>
    </div>
  );
}
