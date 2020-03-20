import React from 'react'

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
}

export default SearchBar