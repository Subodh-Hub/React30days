
import './assets/css/App.css';
import "bootstrap/dist/css/bootstrap.css"
import { HeaderStyle , buttonStyle} from './styles';
import DogImage from "./assets/image/dog.jpeg"
const styles={
  color:"red",
  backgroundColor:"black",
}
function App() {
  console.log(DogImage);
  return (
    <>
      <button className="btn btn-primary">Click Me</button>
      <br />
      <button className="btn btn-secondary">Secondary button</button>
      <img 
        src={DogImage}
        alt="Picture of Dog"
        style={{height:"200px",width:"200px" ,display:"block"}}
      />
    </>
  );
}

export default App;
