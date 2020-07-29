import React, { Component } from 'react';
import CustomFormInput from '../formInputFolder/Form-Input'
import CustomButton from '../buttonFolder/CustomButton'
import { SignInStyle, SignButtonStyle, SignInErrorStyle } from './signInStyle'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signInAction } from '../../redux/actions/authAction'
import { signInWithGoogle } from '../../firebaseFolder/firebase'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        //console.log('sign in= ', this.state)
        this.props.signInAuth(this.state)
        this.setState({ email: '', password: '' })


    }

    render() {
        const { signInStatus, userStatus } = this.props
        if (userStatus.uid)
            return <Redirect to='/'></Redirect>

        return (
            <SignInStyle>
                <p>Sign In</p>
                <form onSubmit={this.handleSubmit}>
                    <SignInErrorStyle>
                        {
                            signInStatus ? <p>{signInStatus}</p> : null
                        }
                    </SignInErrorStyle>
                    <CustomFormInput type="email" name='email' value={this.state.email} label='Email' handleChange={this.handleChange} />

                    <CustomFormInput type="password" name='password' value={this.state.password} label='Password' handleChange={this.handleChange} required />

                    <SignButtonStyle>
                        <CustomButton signIn type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} googleSignInBtn>Sign In With Google</CustomButton>
                    </SignButtonStyle>

                    <div className="to-sign-up">Dont have an account? <Link to='/sign-up'><h5>  Click here to sign up</h5></Link></div>

                </form>
            </SignInStyle>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log('sign in= ', state)
    return {
        signInStatus: state.authState.authError,
        userStatus: state.firebase.auth
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        signInAuth: userCredential => dispatch(signInAction(userCredential))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(SignIn);

