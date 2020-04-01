import {
    SET_SPELLS,
    FETCH_SPELLS_START,
    FETCH_SPELL_SUCCESS,
    FETCH_SPELL_FAILURE,
    FETCH_SPELLS_SUCCESS,
    FETCH_SPELLS_FAILURE
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
        case SET_SPELLS:
            return {
                ...state,
                spells: action.payload
            }
        case FETCH_SPELLS_START:
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
        case FETCH_SPELLS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            }
        case FETCH_SPELLS_FAILURE:
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