import "./styles.css";
import ChromeDinoGame from "react-chrome-dino";

export default function App() {
  return (
    <div className="App">
      <div className="heading-box">
         <img src="https://chrome-dino.co/wp-content/uploads/2022/10/chrome-dino-logo.png" alt="DINO GAME"></img>
  
      </div>      
      <div className="game">
        <ChromeDinoGame />
  
      </div>
      <div className="bottom-box">

      <img className="bottom" src="https://art.pixilart.com/55abfeff259a667.png" alt=" press SPACE to start"></img>


      </div>
    </div>
  );
}
