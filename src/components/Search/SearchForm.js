import React from 'react'

function SearchForm(props) {
  const { handleSubmit, handleChange, search } = props
  return (
    <form onSubmit={handleSubmit} className="searchbox">
      <input
        placeholder="search"
        type="text"
        name="search"
        required
        onChange={handleChange}
        value={search}
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  )
}

export default SearchForm
