import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { FooterStyle } from './footerStyle'

const Footer = () => {
    return (
        <FooterStyle>
            <div className="socials">
                <a href="https://github.com/TheAkindele"><FaGithub /></a>
                <a href="https://twitter.com/MaverickHats"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/muhyideen-akindele-325722150/"> <FaLinkedin /> </a>
            </div>
        </FooterStyle>
    )
}

export default Footer
