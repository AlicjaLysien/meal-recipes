import styled from 'styled-components'

export const SearchForm = styled.form`
input[type=text] {
  padding: 6px;
  margin-bottom: 8px;
  font-size: 17px;
  border: solid 1px #ddd;
}
button {
  padding: 7px 10px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  color: #3B4A51;
  transition: 0.2s;
}
button:hover{
  background: #C6C6C6;
}
`