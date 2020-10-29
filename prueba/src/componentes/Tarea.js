import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tarea.css';


class Tarea extends Component{

    Completado(){
        return{
            fontSize:'20px',
            color:this.props.tarea.done ? 'gray' : 'black',
            textDecoration:this.props.tarea.done ? 'line-through':'none'
        }
    }

    render(){
        const {tarea} = this.props;
        return  <div className="red">
                <p style={this.Completado()}>
                    {tarea.id}-
                    {tarea.titulo}-
                    {tarea.descrip}
                    <input type="checkbox" onChange={this.props.checkDone.bind(this,tarea.id)}/>
                    <button style={btnBorrar} onClick={this.props.deleteTarea.bind(this, tarea.id)}>X</button>
                </p>
                </div>
    }
}

Tarea.propTypes ={
    tarea : PropTypes.object.isRequired
}

const btnBorrar={
    fontSize:'18px',
    borderRadius:'50%',
    padding:'10px 15px',
    cursor:'pinter'
}
export default Tarea;