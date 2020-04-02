import {
    SET_SPELLS_START,
    SET_SPELLS_SUCCESS,
    SET_SPELLS_FAILURE,
    SAVE_SPELL
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
                filteredSpells: action.payload,
                isFetching: false
            }
        case SET_SPELLS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case SAVE_SPELL:
            console.log(state.savedSpells)
            return {
                ...state,
                savedSpells: [
                    ...state.savedSpells,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default reducer