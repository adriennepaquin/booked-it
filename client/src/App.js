import './App.css';
import MainContent from './components/MainContent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-image: url("images/background.jpg");
    /* background-blend-mode: lighten; */
    background-color: white;
    /* background-repeat: no-repeat; */
    /* background-attachment: fixed; */
    /* background-position: center; */
  }
  
  h2 {
    font-family: 'Lobster', cursive;
    font-size: 35px;
  }

  h3 {
        font-family: 'Lobster', cursive;
        font-size: 25px;
    }

  #styled-navbar {
    overflow: hidden;
    padding: 15px;
    height: 100px;
    background-color: white;
    border-bottom: 10px solid black;
  }

  #logo {
    float: left;
  }
  
  #styled-navbar .links-left {
    font-family: 'Lobster', cursive;
    color: #03989e;
    border: 1px solid #03989e;
    padding: 10px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    display: block;
    border-radius: 5px;

    &:hover {
      background-color: #03989e;
      color: white;
    }
  }

  #styled-navbar .links-right {
    font-family: 'Lobster', cursive;
    color: #03989e;
    border: 1px solid #03989e;
    padding: 10px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    display: block;
    border-radius: 5px;

    &:hover {
      background-color: #03989e;
      color: white;
    }
  }

  #styled-navbar .logged-in {
    font-family: 'Lobster', cursive;
    color: #03989e;
    padding: 10px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    display: block;
    border-radius: 5px;
  }

  .button {
    font-family: 'Lobster', cursive;
    color: #03989e;
    padding: 10px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    /* float: center; */
    display: block;
    border-radius: 5px;

    &:hover {
      background-color: #03989e;
      color: white;
    }
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainContent />
    </div>
  );
}

export default App;
