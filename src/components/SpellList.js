import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SpellCard from './SpellCard';
import { fetchSpells } from '../actions'

const SpellList = props => {
    const [filteredSpells, setFilteredSpells] = useState(props.spells)

    useEffect(() => {
        props.fetchSpells()
    }, [])

    return (
        <div>
            <h3>Spell List</h3>
            {props.isFetching ? <p>Loading Spells</p> : 
                <SearchBar 
                    spells={props.spells} 
                    setFilteredSpells={setFilteredSpells} 
                />
            }
            
            {filteredSpells.map((spell, index) => {
                return (
                    <SpellCard
                        key={index}
                        spell={spell}
                    />
                )
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        spells: state.spells,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchSpells })(SpellList)