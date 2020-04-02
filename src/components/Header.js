import React from 'react';

import { HeaderStyled } from '../styling/headerstyle';

import NavBar from './NavBar';

const Header = () => {

    return (
        <HeaderStyled>
            <h1>Dungeons and Dragons Spell List Creator</h1>
            <NavBar />
        </HeaderStyled>
    )
}

export default Header