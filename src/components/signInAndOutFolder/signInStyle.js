import styled from 'styled-components'

export const SignInStyle = styled.div`
    background-color: white;
    width: 40vw;
    margin: 20px auto;
    padding: 10px;
    display: flex;
    flex-direction: column;

    h3{
        width: 100%;
        text-align: center;
    }

    .to-sign-up{
        display: flex;
        padding:20px 10px;

        h5{
            color: blue;
            margin-left: 2px;

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
`

export const SignInErrorStyle = styled.div`
    color: red;
    font-weight: bold;
    text-align: center;
    width: 100%;
    padding: 5px;
`