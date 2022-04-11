import styled from 'styled-components'

export const NavMenu = styled.div`
  overflow: hidden;
  background-color: #970C10;
  //position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  padding: 0.5em 0;
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        font-size: 1.2em;
        list-style-type: none; 
        display: inline-block;
        padding: 0 0.4em;
        border-right: 1px solid white;
    }
    li:last-of-type{
        border-right: none;
    }

`
