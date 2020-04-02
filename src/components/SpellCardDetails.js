import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';

import { saveSpell } from '../actions'

import { SpellDetailsStyled, SpellDetailsCardStyled } from '../styling/spellDetailsStyle'

const SpellCardExpanded = props => {
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
                <button onClick={() => props.saveSpell(spell)}>Choose Spell</button>
            </SpellDetailsCardStyled>
            
            }
        </SpellDetailsStyled>
    )
}

export default connect(null, { saveSpell })(SpellCardExpanded)