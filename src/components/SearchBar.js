import React from 'react';
import { connect } from 'react-redux';

import { SearchBarStyled } from '../styling/searchStyle'

const SearchBar = props => {

    const handleChange = e => {
        e.preventDefault()
        props.setFilteredSpells(props.spells.filter(spell => 
            spell.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const allSpells = e => {
        e.preventDefault()
        props.setFilteredSpells(props.spells)
    }

    return (
        <SearchBarStyled>
            <p>Search by Spell Name</p>
            <form onChange={handleChange}>
                <input
                    name='query'
                    placeholder='All Spells'
                />
            </form>
            <p>Or</p>
            <button onClick={allSpells}>Show All Spells</button>
        </SearchBarStyled>
        
    )
};

const mapStateToProps = state => {
    return {
        queryParams: state.queryParams
    }
}

export default connect(mapStateToProps, {})(SearchBar)