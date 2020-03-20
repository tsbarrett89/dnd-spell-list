import React from 'react'
import { connect } from 'react-redux';

const SpellList = () => {

    return (
        <div>
            <h3>Spell List</h3>
        </div>
    )
};

const mapPropsToState = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapPropsToState)(SpellList)