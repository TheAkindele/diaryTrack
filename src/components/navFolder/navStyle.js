import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navbar = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: black;
    color: white;
`

export const Navbox = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled(Link)`
    color: yellow;

    :hover{color: yellow;}
`

export const NavMenu = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
    height: 70%;

    .list{
        padding: 10px;
        color: white;
    }

    .initial{
        border-radius: 70%;
        background-color: tomato;
    }
`