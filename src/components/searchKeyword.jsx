import React, { useState } from "react";
import ListOfGifs from "./listOfGifs";
import './search.css'



export function Search() {
    const [search, setSearch] = useState('Panda');
    const [newKeyword, setKeyword] = useState('panda');

    const getSearchValue = event => {
        let searchValue = document.getElementById('searchValue');
        searchValue = event.target.value;
        setSearch(searchValue)
    }
    const changeKeyword = () => {
        let keyword = search
        setKeyword(keyword)
    }
    const handleKeyDown = event => {
        if(event.key === 'Enter') {
            changeKeyword();
        }
    }

    return (
        <div className='content-container'>
            <div className="search-container">
                <input 
                    name='searchText' 
                    type='text' 
                    placeholder='Enter search' 
                    id="searchValue" 
                    onChange={getSearchValue} 
                    onKeyDown={handleKeyDown}>
                </input>
                <button 
                    className="search-btn" 
                    onClick={changeKeyword}>
                    Search
                </button>
            </div>
            <h1>You´re looking at random <em>{newKeyword}</em> GIFS</h1>
            <div className="gif-container">
                <ListOfGifs keyword={newKeyword} />
            </div>
        </div>
    )
}