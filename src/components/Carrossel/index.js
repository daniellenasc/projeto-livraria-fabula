import { Carousel } from 'react-carousel-minimal';


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
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <h2>Venha se perder no mundo da leitura</h2>
            <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
            <div style={{
              padding: "0 20px"
            }}>
              <Carousel
                data={data}
                time={2000}
                width="850px"
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
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
      );
    
    

}




