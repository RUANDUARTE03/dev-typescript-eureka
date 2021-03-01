import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  html, body, #root {
    height: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,19,121,1) 34%, rgba(0,212,255,1) 92%);
    color: white
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: "Roboto", sans-serif
  }
  button {
    cursor: pointer;
  }
  .container-card {
    padding: 20px
  }
`