import "./Search.css"

export function Search(props) {
    return (      
      <input
        className="search_input"                
        type="text"
        name="searchParams"
        placeholder="&#xf002; Qual título ou autor você procura?"
        // Criando uma callback anonima para invocar a função passada por props com o value do input como parametro
        onKeyUp={(event) => {
          props.filterAPI(event.target.value);
        }}
      /> 
    );
  }