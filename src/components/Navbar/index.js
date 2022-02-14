import Style from "./navbar.css"
import { Link } from "react-router-dom"
export function Navbar() {

  return (
    <nav>
      
      <input type="checkbox" id="check_nav"></input>
		  <label htmlFor="check_nav" className="checkbtn_nav">
			  <i className="fas fa-bars"></i>
		  </label>
		  <label className="logo">Livraria Fábula</label>
		  <ul>			

        <li><Link to="/" style={{ textDecoration: "none"}} > Home </Link></li>
        <li><Link to="/livros" style={{ textDecoration: "none"}} > Livros </Link></li>
        <li><Link to="/cadastro" style={{ textDecoration: "none"}} > Cadastro </Link></li>
        <li><Link to="/contato" style={{ textDecoration: "none"}} > Contato </Link></li>

		  </ul>
    </nav>
    
  )
}
