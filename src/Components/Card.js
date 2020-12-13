import React from 'react'

const Card = () => {
	return(
		<div className="card mt-5" >
        <div className="card-body" style={{width: '18em'}}>
          <h5 className="card-title text-dark">Card title</h5>
          <h6 className="card-subtitle mb-2 text-secondary">Card subtitle</h6>
          <p className="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
        </div>
      </div>
	)
}

export default Card