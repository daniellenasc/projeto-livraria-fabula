
import { Link } from "react-router-dom"
import './navbar.css'
export function Navbar() {

  return (
    <nav>
      
      <input type="checkbox" id="check_nav"></input>
		  <label htmlFor="check_nav" className="checkbtn_nav">
			  <i className="fas fa-bars"></i>
		  </label>
		  <label className="logo">Livraria Fábula</label>
		  <ul>			

        <li><Link to="/" className="linkNav"> Home </Link></li>
        <li><Link to="/livros" className="linkNav"> Livros </Link></li>
        <li><Link to="/cadastro" className="linkNav"> Cadastro </Link></li>
        <li><Link to="/contato" className="linkNav"> Contato </Link></li> 

		  </ul>
    </nav>
    
  )
}
