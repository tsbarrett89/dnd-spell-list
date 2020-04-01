import {
    SET_SPELLS_START,
    SET_SPELLS_SUCCESS,
    SET_SPELLS_FAILURE,
    FETCH_SPELL_START,
    FETCH_SPELL_SUCCESS,
    FETCH_SPELL_FAILURE,
} from '../actions'

const initialState = {
    spells: [],
    savedSpells: [],
    queryParams: {},
    isFetching: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SPELLS_SUCCESS:
            return {
                ...state,
                spells: action.payload
            }
        case SET_SPELLS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SPELL_SUCCESS:
            return {
                ...state,
                spells: [
                    ...state.spells,
                    action.payload
                ]
            }
        case FETCH_SPELL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case SET_SPELLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            }
        case SET_SPELLS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default reducer