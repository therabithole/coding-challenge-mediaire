import React, { Component } from 'react'
const SearchNotes = ({value, onChange}) => {
    return ( <input
            type="text"
            name= "query"
            placeholder="Search Notes"
            className="form-control my-3"
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
            /> );
}
 
export default SearchNotes;