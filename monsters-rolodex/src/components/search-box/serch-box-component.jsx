import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholders, handleChange}) =>{
    return (
        <input
            className="search"
            type="search"
               placeholder={placeholders}
               onChange={handleChange}
        />
    )
}

