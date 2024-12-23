import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(15, 14, 14, 0.87);
  background-color:rgb(250, 250, 250);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-size: 3.2em;
  line-height: 1.1;
  margin: 0;
}


`;

export default GlobalStyled;