import React from 'react'
import { connect } from 'react-redux'

const SpellCard = props => {

    return (
        <div>
            <p>{props.spell.name}</p>
        </div>
    )
};

const mapPropsToState = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapPropsToState, {})(SpellCard)