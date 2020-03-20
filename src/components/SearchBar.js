import React from 'react';
import { connect } from 'react-redux';

const SearchBar = () => {

    return (
        <div>
            <form>
                <input
                    name='query'
                    placeholder='All Spells'
                />
                <button type='submit'>Search by name</button>
            </form>
            <form>
                <select>
                    <option name=''>Class</option>
                    <option name='bard'>Bard</option>
                    <option name='cleric'>Cleric</option>
                    <option name='druid'>Druid</option>
                    <option name='paladin'>Paladin</option>
                    <option name='ranger'>Ranger</option>
                    <option name='sorcerer'>Sorcerer</option>
                    <option name='warlock'>Warlock</option>
                    <option name='wizard'>Wizard</option>
                </select>
                <select>
                    <option name=''>Spell Level</option>
                    <option name='0'>Cantrips</option>
                    <option name='1'>first level</option>
                    <option name='2'>second level</option>
                    <option name='3'>third level</option>
                    <option name='4'>fourth level</option>
                    <option name='5'>fifth level</option>
                    <option name='6'>sixth level</option>
                    <option name='7'>seventh level</option>
                    <option name='8'>eighth level</option>
                    <option name='9'>ninth level</option>
                </select>
                <button type='submit'>Set Search Parameters</button>
            </form>
        </div>
        
    )
};

const mapStateToProps = state => {
    return {
        queryParams: state.queryParams
    }
}

export default connect(mapStateToProps, {})(SearchBar)