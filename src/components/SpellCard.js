import React from 'react';
import { Link } from 'react-router-dom';

const SpellCard = props => {

    return (
        <div>
            <p>{props.spell.name}</p>
            <Link to={`/spells/${props.spell.index}`}>details</Link>
        </div>
    )
};

export default SpellCard