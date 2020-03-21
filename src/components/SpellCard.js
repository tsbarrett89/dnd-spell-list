import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import { fetchSpellData } from '../actions'
import SpellCardExpanded from './SpellCardExpanded'

const SpellCard = props => {

    return (
        <div onClick={() => props.fetchSpellData(props.spell.index)}>
            <p>{props.spell.name}</p>
            {props.spell.isFetching && <p>fetching spell data</p>}
            {props.spell.desc && <SpellCardExpanded spell={props.spell} />}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapStateToProps, { fetchSpellData })(SpellCard)