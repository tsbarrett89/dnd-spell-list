import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/'>Spells</NavLink>
            <NavLink to='/spell-sheet'>Spell Sheet</NavLink>
        </nav>
    )
}

export default NavBar