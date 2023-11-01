/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --main-white: rgba(255,255,255,1);
    --second-white: #f1f1f1;
    --main-black: rgba(0,0,0,1);
    --main-blue: #6fb4ec;
    --main-yellow: #f6db51;
    --main-dark: #222;
    --font-title: 'Playfair Display', 'Times New Roman', Times, serif;
    --font-text: 'Open sans', Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: var(--font-text);
    background-color: var(--main-white);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    
  </React.StrictMode>,
)
