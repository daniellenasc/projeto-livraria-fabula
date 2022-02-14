import Style from "./navbar.css"
import { Link } from "react-router-dom"
export function Navbar() {

  return (
    <nav>
      
      <input type="checkbox" id="check_nav"></input>
		  <label for="check_nav" class="checkbtn_nav">
			  <i class="fas fa-bars"></i>
		  </label>
		  <label class="logo">Livraria Fábula</label>
		  <ul>			

        <li><Link to="/" className="linkNav"> Home </Link></li>
        <li><Link to="/livros" className="linkNav"> Livros </Link></li>
        <li><Link to="/cadastro" className="linkNav"> Cadastro </Link></li>
        <li><Link to="/contato" className="linkNav"> Contato </Link></li>

		  </ul>
    </nav>
    
  )
}