import React from 'react'
import { connect } from 'react-redux'

const SavedSpells = () => {

    return (
        <div>
            <h3>Spell Sheet</h3>
        </div>
    )
};

const mapPropsToState = state => {
    return {
        savedSpells: state.savedSpells
    }
}

export default connect(mapPropsToState, {})(SavedSpells)