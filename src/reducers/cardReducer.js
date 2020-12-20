import { FETCH_CARDS, FETCH_DETAILS }  from '../actions/types'

const initialState = {
    cardItems: [],
    detailsItem: {},
    editItem: {},
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_CARDS:  
            return {
                ...state,
                cardItems: action.payload
            }

        case FETCH_DETAILS:  
            return {
                ...state,
                detailsItem: action.payload
            }

        // case EDIT_CARD:  
        //     return {
        //         ...state,
        //         editItem: action.payload
        //     }

        default:
            return state
    }
}