import  FETCH_CARDS  from '../actions/types'

export const fetchCards = () => dispatch => {
    fetch('https://countries-274616.ew.r.appspot.com', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
      
		query {	
			Country {
				name
				capital
				flag {
					emoji
					emojiUnicode
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
