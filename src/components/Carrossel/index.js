import { Carousel } from 'react-carousel-minimal';
import "./Carrossel.css"


export function Carrossel(){
    const data = [
        {
          image: "https://darkside.vteximg.com.br/arquivos/ids/174298-491-491/270-a-pequena-sereia-0.png?v=637572001481570000",
          caption: `Pequena Sereia`
        },
        {
          image: "https://darkside.vteximg.com.br/arquivos/ids/169347-491-491/239-alice-classic-edition-0.jpg?v=637008056887400000",
          caption: "Alice no país das maravilhas"
        },
        {
          image: "https://darkside.vteximg.com.br/arquivos/ids/169361-491-491/311-alice-caveirinha-0.jpg?v=637008106919000000",
          caption: "Alice através do espelho"
        },
        {
          image: "https://livrariascuritiba.vteximg.com.br/arquivos/ids/1884636-1000-1000/LV451205.jpg?v=637081234380200000",
          caption: "O Labirinto do Fauno"
        },
        {
          image: "https://darkside.vteximg.com.br/arquivos/ids/174202-491-491/o-jardim-secreto-0.png?v=637570494607830000",
          caption: "O Jardim Secreto"
        },  
      ];

      
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      return (
        <div>
          <div style={{ textAlign: "center", marginTop: "150px" }}>
            <h1>Seja bem-vindo a Livraria Fábula!!</h1>
            <p>Venha se perder no mundo da leitura com os clássicos da literatura!!</p>
            <div className="carrossel_style">
              <Carousel 
                data={data}
                time={2000}
                width="900px"
                height="600px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "650px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
    
    

}




