import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tarea from './Tarea'

class Tareas extends Component{
    render(){
        return this.props.tareas.map(tarea=>
        <Tarea 
            tarea={tarea} 
            key={tarea.id} 
            deleteTarea={this.props.deleteTarea}
            checkDone={this.props.checkDone}
        />);
    }
}

Tareas.propTypes={
    tareas: PropTypes.array.isRequired
}

export default Tareas;