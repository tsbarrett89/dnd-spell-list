import axios from 'axios'

export const SET_SPELLS = "SET_SPELLS"
export const FETCH_SPELLS_START = "FETCH_SPELL_START"
export const FETCH_SPELL_SUCCESS = "FETCH_SPELL_SUCCESS"
export const FETCH_SPELL_FAILURE = "FETCH_SPELL_FAILURE"
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS"
export const FETCH_SPELLS_FAILURE = "FETCH_SPELL_FAILURE"

export const fetchSpellData = spell => dispatch => {
    dispatch({ type: FETCH_SPELLS_START, payload: spell })
    axios
        .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: SET_SPELLS, payload: res.data.results})
        })
        .catch(err => dispatch({ type: FETCH_SPELLS_FAILURE, payload: `Failed with ${err.status} status code` }))
}