import { FETCH_CARDS, FETCH_DETAILS }  from '../actions/types'

export const fetchCards = () => dispatch => {
    fetch('https://countries-274616.ew.r.appspot.com', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      
		query {	
			Country {
				alpha2Code
				name
				capital
				flag {
					svgFile
				}
			}
		
		}

	` })
	})
	  .then(res => res.json())
	  .then(cards => dispatch({
          type: FETCH_CARDS,
          payload: cards.data.Country
      }))
}

export const fetchDetails = (id) => dispatch => {
    fetch('https://countries-274616.ew.r.appspot.com', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      
		query {	
			Country(alpha2Code: "${id}" ) {
				alpha2Code
				name
				capital
				flag {
					svgFile
				}
				convertedArea(areaUnit: SQUARE_KILOMETERS) {
	 				value
	 			}
	 			population
	 			topLevelDomains {
	 				name
	 			}
			}
		
		}

	` })
	})
	  .then(res => res.json())
	  .then(cards => dispatch({
		type: FETCH_DETAILS,
		payload: cards.data.Country
      }))
}
