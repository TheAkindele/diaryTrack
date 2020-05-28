import React from 'react'
import './Button.scss'

const CustomButton = ({ children, createEvent, ...otherButtonProps }) => (
    <button className={`
    ${createEvent ? 'create-event' : ''}  
    custom-button`}
        {...otherButtonProps} >
        {children}
    </button>
)

export default CustomButton