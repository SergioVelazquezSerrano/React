import React, { Component } from 'react';

export default class Formu extends Component{

    state = {
        titulo :"",
        descrip:""
    }

    onSubmit = e =>{
        this.props.addTarea(this.state.titulo, this.state.descrip);
        e.preventDefault();
    }

    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text' 
                    name='titulo'
                    placeholder='Tarea' 
                    onChange={this.onChange}
                    value={this.state.titulo}/>

                <br/><br/>

                <textarea 
                    placeholder='Descripcion' 
                    name='descrip'
                    onChange={this.onChange}
                    value={this.state.descrip}>
                </textarea>

                <br/>

                <button type="submit">Añadir</button>
            </form>
        )
    }
}
