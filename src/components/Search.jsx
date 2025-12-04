import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  //the current value of the input   a function that updates the value
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="search" />


        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  )
}
export default Search



/*
value={searchTerm}

The visible text in the input is controlled by the searchTerm state coming from the parent.

This makes it a controlled input.

onChange={(e) => setSearchTerm(e.target.value)}

Whenever the user types:

React receives the typed value (e.target.value)

Calls setSearchTerm(...)

Updates the state in the parent component

Causes a re-render

Input shows the new value

This is how controlled forms work in React.
*/