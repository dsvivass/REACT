import React from 'react'

import './Task.css'
import PropTypes from 'prop-types'

class Task extends React.Component{

    styleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'black' : 'grey',
            textDecoration: this.props.task.done ?  'none' : 'line-through'
        }
    }

    render() {

        const {task} = this.props;

        return (
            <div style={this.styleCompleted()}>
                {task.title} - {task.description} - {task.id}
                    <input 
                        type="checkbox" 
                        onChange={this.props.checkDone.bind(this, task.id)}
                        checked={task.done}
                    />
                    <button 
                        style={btnDelete} 
                        onClick={this.props.deleteTask.bind(this, task.id)}>
                        x
                    </button>
            </div>
        )
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
}

const btnDelete = {
    fontSize: "18px",
    color: "blue"
}

export default Task;