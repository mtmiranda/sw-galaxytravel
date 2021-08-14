import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
 --background: #F0F2F5;
 --blue-300: #363F5F;
 --gray-100: #969CB3;
 --red: #ED1C2A;
 --white: #FFFFFF;
 --black: #171717;
 --yellow-brand: #F2E11E;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  @media(max-width: 1080px){
    font-size: 93.75%;
  }

  @media(max-width: 720px){
    font-size: 87.5%;
  }
}

body{
    background: var(--blue-300);
    color:  var(--white);
    -webkit-font-smoothing: antialiased;
}

form{
  color: var(--text-title);
}

body, input, textarea, button{
  font-family: 'anakinmono', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

`
