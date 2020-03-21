import React, { useState } from 'react'

import SpellCardExpanded from './SpellCardExpanded'

const SpellCard = props => {

    return (
        <div onClick={() => props.fetchSpellData(props.spell.index)}>
            <p>{props.spell.name}</p>
            {props.spell.isFetching && <p>fetching spell data</p>}
            {props.spell.desc && <SpellCardExpanded spell={props.spell} />}
        </div>
    )
};

export default SpellCard