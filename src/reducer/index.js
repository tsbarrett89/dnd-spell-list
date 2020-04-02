import {
    SET_SPELLS_START,
    SET_SPELLS_SUCCESS,
    SET_SPELLS_FAILURE
} from '../actions'

const initialState = {
    spells: [],
    filteredSpells: [],
    savedSpells: [],
    queryParams: {},
    isFetching: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SPELLS_START:
            return {
                ...state,
                isFetching: true
            }
        case SET_SPELLS_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                filteredSpells: action.payload
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