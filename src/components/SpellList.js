import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SpellCard from './SpellCard';
import { fetchSpells } from '../actions'

const SpellList = props => {
    useEffect(() => {
        props.fetchSpells()
    }, [])

    return (
        <div>
            <h3>Spell List</h3>
            <SearchBar />
            {props.spells.map(spell => {
                return (
                    <SpellCard key={spell.index} spell={spell}/>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapStateToProps, { fetchSpells })(SpellList)