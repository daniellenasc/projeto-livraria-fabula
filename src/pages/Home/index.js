import logo from '../../assets/Design sem nome.png'
import './Home.css'
import {Carrossel} from '../../components/Carrossel'
import { Footer } from "../../components/Footer"


export function Home(){

    return (
        <div>
            <div className="home">
            <img  src={logo} alt="logo-" className="hero"/>
            <Carrossel/>
            <Footer />
            </div>
        

        </div>
    )
}


