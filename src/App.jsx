import { useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { ThemeContext } from './contexts';
import CONSTANTS from './constants';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <UserProfile/>
    </ThemeContext.Provider>
  );
}

export default App;
