import React from 'react'
import './Button.scss'

const CustomButton = ({ children, googleSignInBtn, signIn, signUp, ...otherButtonProps }) => (
    <button className={`
    ${signUp ? 'sign-up' : ''}
    ${signIn ? 'sign-in' : ''}
    ${googleSignInBtn ? 'google-sign-in-btn' : ''}
    custom-button`}
        {...otherButtonProps} >
        {children}
    </button>
)

export default CustomButton