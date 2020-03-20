import axios from 'axios'

export const SET_SPELLS = "SET_SPELLS"
export const FETCH_SPELL_START = "FETCH_SPELL_START"
export const FETCH_SPELL_SUCCESS = "FETCH_SPELL_SUCCESS"
export const FETCH_SPELL_FAILURE = "FETCH_SPELL_FAILURE"

export const setSpells = (spells) => {
    return {
        type: SET_SPELLS,
        payload: spells
    }
}

export const fetchSpellData = spell => dispatch => {
    dispatch({ type: FETCH_SPELL_START, payload: spell })
    axios
        .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells${spell}`)
        .then(res => dispatch({ type: FETCH_SPELL_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SPELL_FAILURE, payload: `Failed with ${err} status code` ))
}