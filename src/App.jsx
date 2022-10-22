import React, { StrictMode } from 'react'
import { SideBar } from './components';
import { Home, Login } from './pages';
import AppRouter from './routers/AppRouter';

import './styles/styles.scss';

const App = () => {
  return (
    <main className='app-main'>
      <SideBar/>
      <div>
      <AppRouter/>
      </div>
    </main>
  );
}





export default App