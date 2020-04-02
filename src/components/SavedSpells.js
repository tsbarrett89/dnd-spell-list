import React from 'react'
import { connect } from 'react-redux'

import SavedSpellCard from './SavedSpellCard'

import { SpellDetailsStyled } from '../styling/spellDetailsStyle'

const SavedSpells = props => {

    return (
        <SpellDetailsStyled>
            <h3>Spell Sheet</h3>
            {props.savedSpells.map((spell, index) => {
                return (
                    <SavedSpellCard
                        key={index}
                        spell={spell}
                    />
                )
            })}
        </SpellDetailsStyled>
    )
};

const mapPropsToState = state => {
    return {
        savedSpells: state.savedSpells
    }
}

export default connect(mapPropsToState, {})(SavedSpells)