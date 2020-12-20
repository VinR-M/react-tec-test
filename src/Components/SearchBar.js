import React from 'react'

const SearchBar = () => {
	
	return(
		<form className="form-inline mt-3">
        <div className="form-group mb-2 mr-2">
          <input type="text" className="form-control-plaintext bg-light rounded" id="search-bar"  placeholder="Search for a Country..."/>
        </div>
        <button type="submit" class="btn btn-secondary mb-2">Search</button>
      </form>
	)
}

export default SearchBar