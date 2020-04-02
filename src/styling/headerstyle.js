import styled from 'styled-components'
import cobblestone from '../images/cobblestone.jpg'

export const HeaderStyled = styled.div `
    background-image: url(${cobblestone});
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 2.5rem;
        padding: 1.5% 0;
        color: #000772;
        background-color: #55AEFF;
        margin: 1.5% auto;
        border: 1px solid #000772;
        border-radius: 12px;
        width: 40%;
        opacity: 0.9;
    }
`