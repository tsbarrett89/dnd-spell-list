import React from 'react'
import { connect } from 'react-redux'

import { fetchSpellData } from '../actions'

const SpellCard = props => {
    const spell = props.spells.find(indSpell => indSpell.name === props.spell.name)

    return (
        <div onClick={() => props.fetchSpellData(props.spell.index)}>
            <p>{props.spell.name}</p>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapStateToProps, { fetchSpellData })(SpellCard)