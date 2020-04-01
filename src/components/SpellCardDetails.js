import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const SpellCardExpanded = () => {
    const { spellIndex } = useParams();
    const [spell, setSpell] = useState({})

    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/${spellIndex}`)
            .then(res => {
                setSpell(res.data)
            })
    }, [])

    return (
        <div>
            <p>{spell.name}</p>
        </div>
    )
}

export default SpellCardExpanded