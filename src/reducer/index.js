import {
    SET_SPELLS,
    FETCH_SPELL_START,
    FETCH_SPELL_SUCCESS,
    FETCH_SPELL_FAILURE
} from '../actions'

const initialState = {
    spells: [],
    savedSpells: [],
    queryParams: {},
    errorMessage: ''
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
                        if(spell.index === action.payload.index){
                            console.log(spell.index)
                            return {
                                ...spell,
                                isFetching: true
                            }
                        } else {
                            return spell
                        }
                    })
                ],
                errorMessage: 'f'
            }
        case FETCH_SPELL_SUCCESS:
            return {
                ...state,
                spells: [
                    ...state.spells,
                    state.spells.map(spell => {
                        if(spell.index === action.payload.index){
                            console.log(spell.index)
                            return action.payload
                        } else {
                            return spell
                        }
                    })
                ]
            }
        case FETCH_SPELL_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default reducer