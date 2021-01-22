import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDetails } from '../actions/cardActions'
import { Link } from 'react-router-dom'
import { Edit } from '../styles'

class Details extends Component {
    constructor() {
        super()

        this.state = {
            edit: false,
            editData: {
                name: " "
            }
        }

        this.handleEditToggle = this.handleEditToggle.bind(this)
    }

    // SEND HELP
    async componentDidMount() {
        this.props.fetchDetails(this.props.match.params.id)

        const cardDets = (this.props.cardDetails[0]) ? this.props.cardDetails[0] : { name: " "}
        
        console.log(cardDets)

        this.setState({
            editData:  {
                name: cardDets.name
            }           
        })
    }    

    handleEditToggle(e) {
        e.preventDefault()
        // if(this.state.edit) {
        //     this.setState({
        //         editData: {
        //             name: this.props.cardDetails[0].convertedArea.value
        //         }
        //     })
           
        // }

        this.setState({
            edit: !this.state.edit
        })

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
                        {!this.state.edit ?
                        <>
                            <h5 className="card-title text-dark">{this.state.editData.name}</h5>
                            <h6 className="card-subtitle mb-3 text-secondary">{this.state.editData.name}</h6>
                            <img src={flag.svgFile} className="mb-4" alt="" width="120px"/> 
                            <h6 className="card-subtitle mb-4 text-secondary">Area: {convertedArea.value} Km²</h6>
                            <h6 className="card-subtitle mb-4 text-secondary">Population: {details.population}</h6>
                            <h6 className="card-subtitle mb-1 text-secondary">{topLevelDomain.name}</h6>
                        </>

                         : 
                         
                         <Edit fontSize="15">
                            <input type="text" className="form-control text-dark country-title-input" name="name" onChange={this.onChange} value={this.state.editData.name}/>
                            <input type="text" className="form-control text-secondary" name="capital"   value={this.state.editData.capital}/> 
                            <img src={flag.svgFile} className="mb-3 mt-3" alt="" width="120px"/> 
                            <div className="row col-md-12 text-secondary h6 input-label">
                                <label htmlFor="">Area: </label>
                                <input type="text" className="form-control text-secondary" name="area" value={convertedArea.value}/>
                            </div>
                            <div className="row col-md-12 text-secondary h6 input-label">
                                <label htmlFor="">Population: </label>
                                <input type="text" className="form-control text-secondary" name="area" value={details.population}/>
                            </div>
                            <input type="text" className="form-control text-secondary" name="domain" value={topLevelDomain.name}/>
                         </Edit>
                        
                        }
                       
                        <div className="d-flex justify-content-end">
                            <a href="#"><h6 onClick={this.handleEditToggle}>{!this.state.edit ? "Edit" : "Save"}</h6></a>    
                        </div>                                     
                    </div>
                </div>
                <Link to="/">
                    <p>Go Back</p>
                </Link>
                
            </div>
        )
    }
}

// name: action.name,
// capital: action.capital,
// convertedArea:{value: action.value},
// population: action.population,
// topLevelDomains: [{name: action.topLevelDomain}],

const mapStateToProps = state => ({
    cardDetails: state.cards.detailsItem
})

export default connect(mapStateToProps, { fetchDetails })(Details)
