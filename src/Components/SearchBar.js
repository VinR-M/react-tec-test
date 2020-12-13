import React from 'react';

const SearchBar = () => {
	return(
		<form className="form-inline ">
        <div className="form-group mb-2 mr-2">
          <input type="text" className="form-control-plaintext bg-light rounded" id="search-bar" value="País, capital..."/>
        </div>
        <button type="submit" class="btn btn-secondary mb-2">Pesquisar</button>
      </form>
	)
}

export default SearchBar;