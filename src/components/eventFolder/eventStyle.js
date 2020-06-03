import styled from 'styled-components'

export const Eventbox = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

export const EventBody = styled.div`
    padding: 10px;
        background-color: white;

        .title{
            padding: 10px;
            text-align: center;
            color: blue;
        }

        .summary{
            span {color: tomato;}
        }
`

export const EventFooter = styled.div`
background-color: lightgrey;
padding: 10px;
`

export const DeleteButton = styled.button`
background-color: black;
color: red;
padding: 5px;
text-align: center;
border: none;
`