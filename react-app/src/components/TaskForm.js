import React from 'react'

export default class Taskform extends React.Component {

    state = {
        title: '',
        description: ''
    }
    onSubmitMethod = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()
    }

    onChangeFunc = e => {
        this.setState({
            [e.target.name] : e.target.value // Asi interpreta el valor del atributo name del elemento: title o description
        })
        // this.state.e.target.value
    }

    render() {
        return (
            <form onSubmit={this.onSubmitMethod}>
                <input 
                    type="text" 
                    placeholder="Write a task" 
                    onChange={this.onChangeFunc}
                    value={this.state.title}
                    name="title"/>
                <br/>
                <textarea 
                    placeholder="Write a description" 
                    onChange={this.onChangeFunc}
                    value={this.state.description}
                    name="description">
                </textarea>
                <input type="submit"/>
            </form>
        )
    }

}