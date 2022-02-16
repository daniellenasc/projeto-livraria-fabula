import "./Search.css"

export function Search(props) {
    return ( 
      <>
      <div className="search_lupa">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        className="search_input"                
        type="text"
        name="searchParams"
        placeholder="Qual livro ou autor você procura?"
        // Criando uma callback anonima para invocar a função passada por props com o value do input como parametro
        onKeyUp={(event) => {
          props.filterAPI(event.target.value);
        }}
      /> 
      </>
      
    );
  }