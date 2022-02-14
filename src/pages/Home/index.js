import logo from '../../assets/Design sem nome.png'
import './styles.module.css'
import {Carrossel} from '../../components/Carrossel'


export function Home(){

    return (
        <div>
            <div className="home">
            <img className="imageHero" src={logo} alt="logo-"/>
            <Carrossel/>
            
            </div>
        

        </div>
    )
}


