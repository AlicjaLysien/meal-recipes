import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import MainRouter from './MainRouter';
import Menu from './components/Menu';



const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Nutino', sans-serif;
  background: #312110;
  color: #D9D7D0;
  // #B68230 yellow
  // #970C10 red

}
a {
    text-decoration: none;
    color: #D9D7D0;
}
`

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <GlobalStyle/>
          <Menu/>
          <MainRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
