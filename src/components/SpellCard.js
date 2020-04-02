import React from 'react';
import { Link } from 'react-router-dom';

import { SpellCardStyled } from '../styling/spellCardStyle'

const SpellCard = props => {

    return (
        <SpellCardStyled>
            <p>{props.spell.name}</p>
            <Link to={`/spells/${props.spell.index}`}>details</Link>
        </SpellCardStyled>
    )
};

export default SpellCard