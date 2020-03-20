import React from 'react'
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

const SpellList = () => {

    return (
        <div>
            <h3>Spell List</h3>
            <SearchBar />
        </div>
    )
};

const mapPropsToState = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapPropsToState)(SpellList)