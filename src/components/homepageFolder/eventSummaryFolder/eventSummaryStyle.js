import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const EventSummaryStyle = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const SummaryStyle = styled.div`
    background-color: lightgoldenrodyellow;
    padding: 10px;
    text-transform: capitalize;
    width: 350px
`

export const SummaryTitleStyle = styled(Link)`
    color: blue;
    :hover{color: red;}
`

export const deleteStyle = styled.div`
    background-color: black;
    color: red;
    padding: 5px;
    border: 1px solid red;
`

export const SummaryFooterStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: pink;
    padding: 5px;
    color: green;

    .poster{
        font-weight: bolder;
        text-transform: capitalize;
        color: blue;
    }
`