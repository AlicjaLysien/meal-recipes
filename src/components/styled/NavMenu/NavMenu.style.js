import styled from 'styled-components'

export const NavMenu = styled.div`
  overflow: hidden;
  background-color: #970C10;
  //position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
 
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        font-size: 1.4em;
        list-style-type: none; 
        display: inline-block;    
        border-right: 1px solid white;
        transition: 0.3s;
        
    }
    li:first-of-type{
        border-left: 1px solid white;
    }
    a{
        display: block ;
        padding: 0.7em 0.4em;
    }
    a:hover, a.active{
        background-color: #570808;
    }
    @media (max-width: 767px){
        li {
            font-size: 0.8em;
        }
    }
`
