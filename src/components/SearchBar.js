import React from 'react';
import { connect } from 'react-redux';

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
        <div>
            <form onChange={handleChange}>
                <input
                    name='query'
                    placeholder='All Spells'
                />
            </form>
            <button onClick={allSpells}>Show All Spells</button>
        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        queryParams: state.queryParams
    }
}

export default connect(mapStateToProps, {})(SearchBar)