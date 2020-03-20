import React from 'react';
import { connect } from 'react-redux';

const SearchBar = () => {

    return (
        <form>
            <input
                name='query'
                placeholder='search spells'
            />
            <button type='submit'>Search</button>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        queryParams: state.queryParams
    }
}

export default connect(mapStateToProps, {})(SearchBar)