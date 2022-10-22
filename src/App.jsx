import React, { StrictMode } from 'react'
import { Home, Login } from './pages';
import './styles/styles.scss';

const App = () => {
  return (
    <StrictMode>
      <Home/>
    </StrictMode>
  );
}

export default App