import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCards } from '../actions/cardActions'
import SearchBar from "./SearchBar";

class Card extends Component {

  componentDidMount(){
    this.props.fetchCards()
  }

	render() {
    
    const cardItems = this.props.cards.map(card => (
      <div className="card mt-5" key={card.name} >
        <div className="card-body"  style={{width: '18em'}}>
          <h5 className="card-title text-dark">{card.name}</h5>
          <h6 className="card-subtitle mb-4 text-secondary">{card.capital}</h6>
          <img src={card.flag.svgFile} class="mb-3" alt={card.name} width="120px"/> <br/>
          <h6><a href="#" className="card-link">More Details</a></h6>
        </div>
      </div>

    ))
    // console.log(this.props.cards)
    return(
      < >
         <SearchBar />
         {cardItems}
      </>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cardItems
})

export default connect(mapStateToProps, { fetchCards })(Card)