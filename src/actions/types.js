const FETCH_CARDS = 'FETCH_CARDS'
const FETCH_DETAILS = 'FETCH_DETAILS'
const SEARCH_CARD = 'SEARCH_CARD'
const EDIT_CARD = 'EDIT_CARD'

// fetch('https://countries-274616.ew.r.appspot.com', {
	//   method: 'POST',
	//   headers: { 'Content-Type': 'application/json' },
	//   body: JSON.stringify({ query: `
	// 	query {	
	// 		Country(name: "PAÍS") {
	// 			name
	// 			capital
	// 			flag {
	// 				emoji
	// 				emojiUnicode
	// 				svgFile
	// 			}
	// 				convertedArea(areaUnit: SQUARE_KILOMETERS) {
	// 				value
	// 			}
	// 			population
	// 			topLevelDomains {
	// 				name
	// 			}
	// 		}
		
	// 	}

	// ` }),
	// })
	//   .then(res => res.json())
	//   .then(res => console.log(res.data));