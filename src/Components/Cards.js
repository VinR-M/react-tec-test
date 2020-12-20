import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardActions'
import { Link } from 'react-router-dom'

class Cards extends Component {

  componentDidMount(){
    this.props.fetchCards()
  }

	render() {
    
    const cardItems = this.props.cards.map(card => (
      <div className="card mt-5" key={card.alpha2Code} >
        <div className="card-body"  style={{width: '18em'}}>
          <h5 className="card-title text-dark">{card.name}</h5>
          <h6 className="card-subtitle mb-4 text-secondary">{card.capital}</h6>
          <img src={card.flag.svgFile} className="mb-3" alt={card.name} width="120px"/> <br/>
          <Link to={`/Details/${card.alpha2Code}`}>
           <h6>More Details</h6>
          </Link>
        </div>
      </div>

    ))
    
    return(
      <>
         {cardItems}
      </>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cardItems
})

export default connect(mapStateToProps, { fetchCards })(Cards)