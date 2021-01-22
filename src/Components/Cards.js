import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { fetchCards } from '../actions/cardActions'
import SearchBar from "./SearchBar";
import { SliderContainer } from '../styles';



class Cards extends Component {

  componentDidMount(){
    this.props.fetchCards()
  }

	render() {

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      arrows: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,    
      autoplay: true,
      autoplaySpeed: 2000,
      
    };
    
    const cardItems = this.props.cards.map(card => (
      <div className="card" key={card.alpha2Code} >
        <div className="card-body" >
          <h5 className="card-title text-dark">{card.name}</h5>
          <h6 className="card-subtitle mb-3 text-secondary">{card.capital}</h6>
          <div className="flag-container">
             <img src={card.flag.svgFile} className="" width="120px" /> 
          </div><br/>
          <Link to={`/Details/${card.name}`}>
           <h6>More Details</h6>
          </Link>
        </div>
      </div>

    ))
  
    return(
      <>
        <SearchBar />
        <SliderContainer>
          <Slider {...settings}>
            {cardItems}
          </Slider>
        </SliderContainer>
         
      </>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.cards.cardItems
})

export default connect(mapStateToProps, { fetchCards })(Cards)