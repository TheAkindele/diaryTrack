import styled from 'styled-components'

export const SignInStyle = styled.div`
    background-color: white;
    width: 40%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 90%;
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

    .to-sign-up{
        display: flex;
        padding:20px 10px;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }

        h5{
            color: blue;
            margin-left: 2px;
            @media (max-width: 768px) {
            font-size: 1.1rem;
            font-weight: 600;
        }

            &:hover {
                text-decoration: underline;
                color: red;
            }
        }
    }
`

export const SignButtonStyle = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const SignInErrorStyle = styled.div`
    color: red;
    font-weight: bold;
    text-align: center;
    width: 100%;
    padding: 5px;
`