import styled from 'styled-components'

export const Recipe = styled.div`
max-width: 1200px;
    div.ingredients{
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            border-radius: 8px;
            max-width: 40%;
            padding: 10px; 
        }
        span{
            max-width: 50%;
            text-align: left;
            ul {
                list-style-type: none;
                padding: 0;
            }
        }
    }
    img {
       
    }
`