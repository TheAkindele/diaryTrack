import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.div`
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    overflow: none;

    @media (max-width: 768px) {
        
    }

    .small-nav {
            display: none;
        }

    .openNav {
            display: block;
            width: 100%;
            background: gray;
            position: absolute;
            top: 100%;
        }

    .closeNav {
        display: none
    }
`

export const Navbox = styled.div`
    width: 50%;
    
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        width: 80%;
    }
    
`
export const Title = styled(Link)`
    font-size: 2.5rem;
    font-weight: 700;
    color: yellow;
    :hover{color: white;}

    @media (max-width: 768px) {
        font-size: 1.5rem;
        font-weight: 700;
    }
`
export const NavItems = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        display: none;
    }
`
export const IconStyle = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        font-size: 1.9rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    justify-content: space-around;

    a{
        padding: 10px;
        color: white;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        
    }
`

export const SmallNav = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: block;
    }
`
export const SmallMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;        

`
export const NavLinkStyle = styled(Link)`
    color: white;
    padding: 5px 10px;
    margin: 2px 0;
    font-size: 1.1rem;
    font-weight: 600;

    :hover {
        color: red;
    }
`

