import React from 'react'

class Task extends React.Component{

    render() {

        const {task} = this.props;

        return (
            <div>
                {task.title} - {task.description}
                    <input type="checkbox"/>
                    <button>
                        x
                    </button>
            </div>
        )
    }
}

export default Task;