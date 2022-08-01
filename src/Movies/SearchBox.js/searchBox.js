import React from 'react'

const SearchBox = ({searchInput, search, handleSearch}) => {
    return (
        <div className = "search-bar" style = {{margin: "10px"}}>
            Search
            <br />
            <input 
                className='search'
                onChange = {searchInput}
                value = {search}
                style = {{backgroundColor: "white", border: "none", color: "black", width: "25vw", borderRadius: "3px", opacity: "0.5"}}
                placeholder = "Enter your movie" 
            />
            
        </div>
    )
}

export default SearchBox;
