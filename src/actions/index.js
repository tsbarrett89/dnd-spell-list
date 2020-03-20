export const SET_SPELLS = "SET_SPELLS"

export const setSpells = (spells) => {
    return {
        type: SET_SPELLS,
        payload: spells
    }
}