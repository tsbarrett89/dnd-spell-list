import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const SpellCardExpanded = () => {
    const { spellIndex } = useParams();
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
            })
    }, [])

    return (
        <div>
            <p>{spell.name}</p>
            <p>{spell.level} level</p>
            <p>{spell.school.name}</p>
            <p>Casting Time: {spell.casting_time}</p>
            <p>Range: {spell.range}</p>
            <p>Components: {spell.components.map(comp => comp)}</p>
            <p>Duration: {spell.duration}</p>
            <div>{spell.desc.map(p => {
                return <p>{p}</p>
            })
            
            }</div>
        </div>
    )
}

export default SpellCardExpanded