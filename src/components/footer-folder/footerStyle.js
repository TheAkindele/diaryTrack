import styled from 'styled-components'

export const FooterStyle = styled.div`
    width: 100%;
    padding: 10px 0;
    background: black;

    .socials {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a{
            color: white;
            font-size: 2.5rem;
            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }
`