import React, { useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import SpellCard from './SpellCard';
import { setSpells } from '../actions'

const SpellList = props => {

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells')
            .then(res => {
                console.log(res.data)
                props.setSpells(res.data.results)
            })
            .catch(err => console.log(err))
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

export default connect(mapStateToProps, { setSpells })(SpellList)