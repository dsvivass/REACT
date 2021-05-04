import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

// Datos
import tareas from './samples/tareas.json'

// Components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm'
import Posts from './components/Posts'

// Recordando map en javascript normal
var a = [1, 2, 3]

const res = a.map((elem) => elem + 1)

class App extends React.Component{

  state = {
    tasks: tareas
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask] // Esta es una forma de concatenar
    })
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id == id){
        task.done = !task.done
      }
      return task
    })
    this.setState({
      tasks: newTasks
    })
  }

  render() {
    // Route: Enrutador, para trabajar con 'multiples paginas'
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/posts">Posts</Link>
          <Route path="/" render={() => { // Solo / muestra esto, pero si agrego /posts muestra las dos cosas, pero si agrego exact, muestra unicamente el componente de la ruta exacta
            return (
              <div>
                <TaskForm addTask={this.addTask}/>
                <Tasks 
                  tasks={this.state.tasks} 
                  deleteTask={this.deleteTask}
                  checkDone={this.checkDone}/>
              </div>
             )
            }}>
          </Route>
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    )
  }

}

// // function HelloWorld(props) { // El props llega como un objeto
// //   return (
// //     <div id="hello">
// //       <h3>{props.subtitulo}</h3>
// //       {props.miTexto}
// //     </div>
// //   )
// // }

// // Escribiendo como clase
// class HelloWorld extends React.Component{

//   // Propiedad de estado, creo que al poner 'state' lo reconoce para asignarle ciertas props
//   state = {
//     show: true
//   }

//   //Si escribo la funcion asi no la reconoce dentro de la clase

//   // toggleShow() {
//   //   this.setState({show: true})
//   // }

//   // Pero si la escribo como flecha si

//   toggleShow = () => {
//     this.setState({show: !this.state.show})
//   }

//   render() {
//     if (this.state.show){
//       return (
//         <div id="hello">
//           <h3>{this.props.subtitulo}</h3>
//           {this.props.miTexto}
//           <button onClick={this.toggleShow}>Toggle show</button>
//         </div>
//       )
//     } else {
//       return (
//         <div>
//           <h2>
//             No hay elementos, o no se encuentran activos
//             <button onClick={this.toggleShow}>
//               Toggle Show
//             </button>
//           </h2>
//         </div>
//       )
//     }
//   }
// }

// // Puedo reescribir esta funcion como una funcion flecha
// function App() {
//   return (
//     <div>
//       Este es mi componente: 
//       <HelloWorld miTexto="Hola mundo!" subtitulo="Hey"/> 
//       <HelloWorld miTexto="Hello World!" subtitulo="Hey2"/> 
//       <HelloWorld miTexto="@2" subtitulo="Hey3"/> 
//     </div>
//   );
// }

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
