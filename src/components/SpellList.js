import React, { useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

const SpellList = () => {

    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

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