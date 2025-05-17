import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark-bg: #121212;
    --darker-bg: #0a0a0a;
    --light-bg: #1e1e1e;
    --primary-color: #9370DB; /* Medium Purple */
    --secondary-color: #B19CD9; /* Light Purple */
    --accent-color: #7B68EE; /* Medium Slate Blue */
    --text-color: #f0f0f0;
    --text-secondary: #b0b0b0;
    --transition: all 0.3s ease;
    --max-width: 1200px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--dark-bg);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
  }

  a:hover {
    color: var(--accent-color);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--text-color);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 1rem;
    transition: var(--transition);
  }

  button:hover {
    background-color: var(--accent-color);
  }

  section {
    padding: 5rem 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    width: 100%;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    section {
      padding: 3rem 1rem;
    }
  }
`;

export default GlobalStyles;
