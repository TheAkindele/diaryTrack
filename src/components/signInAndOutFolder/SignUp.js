import React, { Component } from 'react';
import CustomFormInput from '../formInputFolder/Form-Input'
import CustomButton from '../buttonFolder/CustomButton'
import { SignInStyle, SignInErrorStyle } from './signInStyle'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUpAction } from '../../redux/actions/authAction'

class SignUp extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        const { password, confirmPassword } = this.state
        e.preventDefault()
        console.log('sign up= ', this.state)
        if (password !== confirmPassword) {
            alert('Password must be same as Confirm Password')
            return this.setState({
                confirmPassword: ''
            })
        }

        this.props.registerNewUser(this.state)
        this.setState({
            firstname: '', lastname: '', email: '', password: '', confirmPassword: ''
        })
    }

    render() {
        const { userStatus, signUpError } = this.props
        if (userStatus.uid)
            return <Redirect to='/'></Redirect>

        return (
            <SignInStyle>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <SignInErrorStyle>
                        {
                            signUpError ? <h5>{signUpError.message}</h5> : null
                        }
                    </SignInErrorStyle>

                    <CustomFormInput type="text" name='firstname' value={this.state.firstname} label='First Name' handleChange={this.handleChange} />

                    <CustomFormInput type="text" name='lastname' value={this.state.lastname} label='Last Name' handleChange={this.handleChange} />

                    <CustomFormInput type="email" name='email' value={this.state.email} label='Email' handleChange={this.handleChange} />

                    <CustomFormInput type="password" name='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />

                    <CustomFormInput type="password" name='confirmPassword' value={this.state.confirmPassword} label='Confirm Password' handleChange={this.handleChange} required />

                    <CustomButton signUp type='submit'>Sign Up</CustomButton>
                </form>
            </SignInStyle>
        );
    }
}

const mapStateToProps = state => {
    //console.log('signup ', state)
    return {
        userStatus: state.firebase.auth,
        signUpError: state.authState.authError
    }
}

const mapDispatchToProps = dispatch => ({
    registerNewUser: userToRegister => dispatch(signUpAction(userToRegister))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)