import { ImgMediaCard } from "../../components/Card";
import "./Books.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Search } from "../../components/Search";
export function Books() {
  const [book, setBook] = useState([]);
  const params = useParams();
  const [render, setRender] = useState(true);
  const [backup, setBackup] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const result = await axios.get("https://ironrest.cyclic.app/fabula");
        setBook([...result.data]);
        setBackup([...result.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks();
    setRender(false);
  }, [render]);

  // Essa é a função responsavel por filtrar o state
  function filterBooks(searchParams) {
    // Caso o value do input esteja vazio, voltamos o valor do state principal para o valor do backup
    if (searchParams === "") {
      setBook([...backup]);
      return;
    }

    // Filtrando o state principal para verificar se inclui o que foi digitado no input
    const filtred = book.filter(
      (currentBook) =>
        currentBook.title.toLowerCase().includes(searchParams.toLowerCase()) ||
        currentBook.author.toLowerCase().includes(searchParams.toLowerCase())
    );

    // Atualizando o state com o array filtrado acima
    setBook(filtred);
  }

  return (
    <>
      <div className="search_bar">
        {/* Passando a função de filtrar o state principal para o componente SearchBar */}
        {/* Essa função será invocada no evento onKeyUp */}
        <Search filterAPI={filterBooks} />
      </div>

      <div className="cards">
        {book
          .filter((currentBook) => {
            return currentBook.id === params.id;
          })
          .map((currentBook) => {
            return (
              <ImgMediaCard
                key={currentBook._id}
                setRerender={setRender}
                id={currentBook._id}
                title={currentBook.title}
                author={currentBook.author}
                price={currentBook.price}
                image={currentBook.image}
              />
            );
          })}
      </div>
    </>
  );
}
