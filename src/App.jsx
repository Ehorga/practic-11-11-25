import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { ThemeContext } from './contexts';
import CONSTANTS from './constants';
import UserProfile from './components/UserProfile/UserProfile';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<HomePage/>} />
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/contact' element = {<ContactPage/>}/>
        <Route path = '*' element ={<NotFoundPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
