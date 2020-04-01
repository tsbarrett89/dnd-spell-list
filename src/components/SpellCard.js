import React, { useState } from 'react'

import SpellCardExpanded from './SpellCardExpanded'

const SpellCard = props => {

    return (
        <div onClick={() => props.fetchSpellData(props.spell.index)}>
            <p>{props.spell.name}</p>
        </div>
    )
};

export default SpellCard