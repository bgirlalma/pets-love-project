import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root {
  font-family: Manrope, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(15, 14, 14, 0.87);
  background-color:rgb(250, 250, 250);


}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 3.2em;
  line-height: 1.1;
  margin: 0;
}

p{
margin: 0;
}

input {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button{
margin: 0;
padding: 0;
border: none;
}

`;

export default GlobalStyled;
