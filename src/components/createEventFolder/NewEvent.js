import React, { Component } from 'react';
import CustomFormInput from '../formInputFolder/Form-Input'
import CustomButton from '../buttonFolder/CustomButton'
import { NewEventStyle } from './newEventStyle'

class NewEvent extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

    }

    render() {
        return (
            <NewEventStyle>
                <h3>Create New Event</h3>
                <form onSubmit={this.handleSubmit}>

                    <CustomFormInput type="text" name='title' value={this.state.title} label='Title' handleChange={this.handleChange} />

                    <CustomFormInput type="text" name='content' value={this.state.content} label='Content' handleChange={this.handleChange} required />

                    <CustomButton type='submit'>Create Event</CustomButton>
                </form>
            </NewEventStyle>
        );
    }
}

export default NewEvent;