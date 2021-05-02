import React from 'react'
import './App.css';


// function HelloWorld(props) { // El props llega como un objeto
//   return (
//     <div id="hello">
//       <h3>{props.subtitulo}</h3>
//       {props.miTexto}
//     </div>
//   )
// }

// Escribiendo como clase
class HelloWorld extends React.Component{

  // Propiedad de estado, creo que al poner 'state' lo reconoce para asignarle ciertas props
  state = {
    show: true
  }

  //Si escribo la funcion asi no la reconoce dentro de la clase

  // toggleShow() {
  //   this.setState({show: true})
  // }

  // Pero si la escribo como flecha si

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show){
      return (
        <div id="hello">
          <h3>{this.props.subtitulo}</h3>
          {this.props.miTexto}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else {
      return (
        <div>
          <h2>
            No hay elementos, o no se encuentran activos
            <button onClick={this.toggleShow}>
              Toggle Show
            </button>
          </h2>
        </div>
      )
    }
  }
}

// Puedo reescribir esta funcion como una funcion flecha
function App() {
  return (
    <div>
      Este es mi componente: 
      <HelloWorld miTexto="Hola mundo!" subtitulo="Hey"/> 
      <HelloWorld miTexto="Hello World!" subtitulo="Hey2"/> 
      <HelloWorld miTexto="@2" subtitulo="Hey3"/> 
    </div>
  );
}

// const App = () => <div>Este es mi componente: <HelloWorld/> <HelloWorld/> <HelloWorld/> </div>

// Ahora como una clase 

// class App extends React.Component {
//   render() {
//     return (
//       <div>Este es mi componente: <HelloWorld/> <HelloWorld/> <HelloWorld/> </div>
//     )
//   }
// }

export default App;
