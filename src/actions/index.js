import axios from 'axios'

export const SET_SPELLS_START = "SET_SPELLS"
export const SET_SPELLS_SUCCESS = "SET_SPELLS_SUCCESS"
export const SET_SPELLS_FAILURE = "SET_SPELL_FAILURE"
export const SAVE_SPELL = "SAVE_SPELL"

export const fetchSpells = spell => dispatch => {
    dispatch({ type: SET_SPELLS_START, payload: spell })
    axios
        .get(`https://www.dnd5eapi.co/api/spells`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: SET_SPELLS_SUCCESS, payload: res.data.results})
        })
        .catch(err => dispatch({ type: SET_SPELLS_FAILURE, payload: `Failed with ${err.status} status code` }))
}

export const saveSpell = spell => {
    return {
        type: SAVE_SPELL,
        payload: spell
    }
}