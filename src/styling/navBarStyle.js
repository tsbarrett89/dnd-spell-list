import styled from 'styled-components';

export const NavStyled = styled.nav `
    display: flex;
    width: 100%;
    background-color: #4D4D4D;
    

    a {
        text-decoration: none;
        text-align: center;
        color: white;
        font-size: 2rem;
        width: 50%;
        padding: 1% 0;
    }

    .active {
        background-color: #55AEFF;
    }
`