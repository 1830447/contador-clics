import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import React from "react";


class App extends React.Component{
  
  constructor(){
    super();
    this.state ={
      numClics:0,
    }
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({numClics}) => ({ numClics: numClics + 1}));
  }
  reiniciarContador(){
    this.setState({numClics:0});
  }

  render(){
    return (
      <div className="App">
        <div className="titulo-contenedor">
          <h1>Contador de Clics</h1>
        </div>
        <div className="contenedor-principal">
          <Contador numClics={this.state.numClics} />
           <Boton
              texto="Clic"
              esBotonDeClic={true}
              manejarClic={this.manejarClic}/>
            <Boton
              texto="Reiniciar"
              esBotonDeClic={false}
              manejarClic={this.reiniciarContador}/>
        </div>
      </div>
    );
  }
}

/* 
function App() {

    const [numClics,setNumClics] = useState(0);

    const manejarClic =()=>{
     setNumClics(numClics +1) ;
    }
    const reiniciarContador = () =>{
      setNumClics(0);
    }
  
}
*/
export default App;
