import {
    SET_SPELLS,
    FETCH_SPELL_START,
    FETCH_SPELL_SUCCESS,
    FETCH_SPELL_FAILURE
} from '../actions'

const initialState = {
    spells: [],
    savedSpells: [],
    queryParams: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SPELLS:
            return {
                ...state,
                spells: action.payload
            }
        case FETCH_SPELL_START:
            return {
                ...state,
                spells: [
                    ...state.spells,
                    state.spells.map(spell => {
                        if(spell.name === action.payload.name){
                            return {
                                ...spell,
                                isFetching: true
                            }
                        }
                    })
                ]
            }
        case FETCH_SPELL_SUCCESS:
            return {
                ...state,
                spells: [
                    ...state.spells
                ]
            }
        default:
            return state
    }
}

export default reducer