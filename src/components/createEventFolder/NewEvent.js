import React, { Component } from 'react';
import CustomFormInput from '../formInputFolder/Form-Input'
import CustomButton from '../buttonFolder/CustomButton'
import { NewEventStyle } from './newEventStyle'
import { connect } from 'react-redux'
import { createPostAction } from '../../redux/actions/postActions'
import { Redirect } from 'react-router-dom'

class NewEvent extends Component {
    state = {
        title: '',
        summary: '',
        content: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log('new event= ', this.state)
        this.props.newEvent(this.state)
        this.setState({ title: '', content: '', summary: '' })
    }

    render() {
        const { userStatus } = this.props
        if (!userStatus.uid)
            return <Redirect to='/sign-in'></Redirect>

        return (
            <NewEventStyle>
                <h3>Create New Event</h3>
                <form onSubmit={this.handleSubmit}>

                    <CustomFormInput type="text" name='title' value={this.state.title} label='Title' handleChange={this.handleChange} />

                    <CustomFormInput type="text" name='summary' value={this.state.summary} label='Summary' handleChange={this.handleChange} required />

                    <CustomFormInput type="text" name='content' value={this.state.content} label='Content' handleChange={this.handleChange} required />

                    <CustomButton type='submit'>Create Event</CustomButton>
                </form>
            </NewEventStyle>
        );
    }
}

const mapStateToProps = state => {
    //console.log('new eevnt= ', state)
    return {
        userStatus: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => ({
    newEvent: createdEvent => dispatch(createPostAction(createdEvent))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);