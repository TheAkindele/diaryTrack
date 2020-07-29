import styled from 'styled-components'

export const NewEventStyle = styled.div`
    background-color: white;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 80%;
    }

    p{
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
`