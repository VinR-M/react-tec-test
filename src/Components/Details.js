import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDetails } from '../actions/cardActions'
import { Link } from 'react-router-dom'

class Details extends Component {
    
    componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id)
    }    

    render() {
        console.log(this.props.cardDetails)
         const details = (this.props.cardDetails[0]) ? this.props.cardDetails[0] : ' '
         const topLevelDomain = (this.props.cardDetails[0]) ? details.topLevelDomains[0] : ' '
         const flag = (this.props.cardDetails[0]) ? details.flag : ' '
         const convertedArea = (this.props.cardDetails[0]) ? details.convertedArea : ' '
         
       
        return (
            <div>
                <h1>Country Details</h1>
                <div className="card mt-5 mb-5" key={details.alpha2Code} >
                    <div className="card-body"  style={{width: '18em'}}>
                        <h5 className="card-title text-dark">{details.name}</h5>
                        <h6 className="card-subtitle mb-3 text-secondary">{details.capital}</h6>
                        <img src={flag.svgFile} className="mb-4" width="120px"/> 
                        <h6 className="card-subtitle mb-4 text-secondary">Area: {convertedArea.value} Km²</h6>
                        <h6 className="card-subtitle mb-4 text-secondary">Population: {details.population}</h6>
                        <h6 className="card-subtitle mb-1 text-secondary">{topLevelDomain.name}</h6>                    
                    </div>
                </div>
                <Link to="/">
                    <p>Go Back</p>
                </Link>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cardDetails: state.cards.detailsItem
})

export default connect(mapStateToProps, { fetchDetails })(Details)
