import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import { SpellDetailsStyled } from '../styling/spellDetailsStyle'

const SpellCardExpanded = () => {
    const { spellIndex } = useParams();
    const [loading, setLoading] = useState(false)
    const [spell, setSpell] = useState({
        name: '',
        desc: [],
        range: '',
        components: [],
        ritual: false,
        duration: '',
        concentration: false,
        casting_time: '',
        level: null,
        school: { name: '', url: ''},
        classes: []
    })

    useEffect(() => {
        axios
            .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/spells/${spellIndex}`)
            .then(res => {
                console.log(res.data)
                setSpell(res.data)
                setLoading(!loading)
            })
    }, [])

    return (
        <SpellDetailsStyled>
            {!loading ? <p>Loading spell</p> :
            <div>
                <p>{spell.name}</p>
                <p>{spell.level} level</p>
                <p>{spell.school.name}</p>
                <p>Casting Time: {spell.casting_time}</p>
                <p>Range: {spell.range}</p>
                <p>Components: {spell.components.map(comp => comp)}</p>
                <p>Duration: {spell.duration}</p>
                <div>{spell.desc.map((p, index) => {
                    return <p key={index}>{p}</p>
                })
                
                }</div>
            </div>
            }
        </SpellDetailsStyled>
    )
}

export default SpellCardExpanded