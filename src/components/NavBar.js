import React from 'react'
import { NavLink } from 'react-router-dom'

import { NavStyled } from '../styling/navBarStyle'

const NavBar = () => {
    return (
        <NavStyled>
            <NavLink to='/spells'>Spells</NavLink>
            <NavLink to='/spell-sheet'>Spell Sheet</NavLink>
        </NavStyled>
    )
}

export default NavBar