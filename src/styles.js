import styled from 'styled-components'
import SearchBar from './components/SearchBar'

export const Edit = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        
    input {
        text-align:center;
        border: none;
        border-bottom: 1px solid grey;
        border-radius:0;
        /* font-size: ${props => `${props.fontSize}px`}; */
        width: 180px;        
    }

    label {
        padding-top:15px;
        width: 27%;
    }

    .country-title-input {
        width: 270px; 
    }

`
export const SliderContainer = styled.div `
    width: 85vw;
    .slick-center {
        border-radius: 10px;
            background-color: white;
            height: 280px;
    }

    .card {
        width: 380px !important;
        height: 260px;

        .card-body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .flag-container {
            height: 80px;
            img {
                max-height: 80px;
            }
        }

       

    }
`

export const Search = styled.div `
    input {
        font-size: 1.4rem;
        padding: 2px 10px;
        width: 90%;
    }
`