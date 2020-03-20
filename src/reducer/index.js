import {
    SET_SPELLS
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
        default:
            return state
    }
}

export default reducer