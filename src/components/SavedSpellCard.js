import React from 'react'

import { SpellDetailsCardStyled } from '../styling/spellDetailsStyle'

const SavedSpellCard = props => {
    const spell = props.spell

    return (
        <SpellDetailsCardStyled>
            <p>{spell.name}</p>
            <p>{spell.level} level {spell.school.name}</p>
            <p>Casting Time: {spell.casting_time}</p>
            <p>Range: {spell.range}</p>
            <p>Components: {spell.components.map(comp => comp)}</p>
            <p>Duration: {spell.duration}</p>
            <p>Spell Decription:</p>
            <div>{spell.desc.map((p, index) => {
                return <p key={index}>{p}</p>
            })
            
            }</div>
        </SpellDetailsCardStyled>
    )
}

export default SavedSpellCard