import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Link} from "react-router-dom";
import './App.css';
import tareas from './datos/tareas.json';
import Tareas from './componentes/Tareas';
import Formu from './componentes/Formu';
import Post from './componentes/Post';

/*
function Holi(props){
  return(
  <div id="holi">Holi {props.texto}
    <h6>{props.sub}</h6>
  </div>
  );
}
*/
/*
const App=()=>  <div>holi  <Holi/> </div>
*/
/*
class App extends React.Component{
  render(){
    return (
      <div>holi  <Holi/> </div>
    );
  
  }
}
*/
/*
class Holi extends React.Component{

  state = {
    show: true
  }

  cambiar = () =>{
    this.setState({show:!this.state.show})
  }

  render(){
    if(this.state.show){
      return(
        <div id="holi">Holi {this.props.texto}
          <h6>{this.props.sub}</h6>
          <button onClick={this.cambiar}>Cambiar</button>
        </div>
        );
    }else{
      return(<h1>No elemento
                <button onClick={this.cambiar}>Cambiar</button>
              </h1>)
    }
  }
}

function App() {
  return (
    <div>Saludos a: 
      <Holi texto="Ser" sub="31"/> 
      <Holi texto="Props"/>
      <Holi sub="14"/>
      <Holi />
      </div>
  );
}
*/

class App extends Component{

  state ={
    tareas:tareas
  }

  addTarea = (titulo, descrip) =>{
    const newTarea={
      titulo:titulo,
      descrip:descrip,
      id: this.state.tareas.length
    }
    this.setState({
      tareas:[...this.state.tareas,newTarea]
    })
  }

  deleteTarea = (id)=>{
    const deltarea =this.state.tareas.filter(tarea => tarea.id !== id);
    this.setState({tareas:deltarea});
  }

  checkDone = (id)=>{
    const checktarea=this.state.tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.done = !tarea.done
      }
      return tarea;
    });
    this.setState({tareas:checktarea})
  }

  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={()=>{
          return <div>
                <Formu addTarea={this.addTarea}/>
                <Tareas 
                  tareas={this.state.tareas} 
                  deleteTarea={this.deleteTarea}
                  checkDone={this.checkDone}
                />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Post}/>
      </Router>
      </div>
    
  }
}


export default App;
