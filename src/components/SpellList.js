import React, { useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SpellCard from './SpellCard';
import { setSpells } from '../actions'

const SpellList = props => {
    props.fetchSpellData()

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

export default connect(mapStateToProps, { fetchSpellData })(SpellList)