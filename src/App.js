import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainRouter from "./MainRouter";
import Menu from "./components/Menu";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Nutino', sans-serif;
  color: #342A28;
  // #B68230 yellow
  // #970C10 red
  // #312110 brown
}
a {
    text-decoration: none;
    color: #E5E5E5;
}
h1{
  font-family: 'Great Vibes', cursive;
}
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Menu />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
