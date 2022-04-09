import './App.css';

import { createGlobalStyle } from 'styled-components';
import MainRouter from './MainRouter';



const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Nutino', sans-serif;
}
`

function App() {

  return (
    <div className="App">
    <GlobalStyle/>
    <MainRouter />
    </div>
  );
}

export default App;
