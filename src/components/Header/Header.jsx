import { useContext } from 'react'; 
import { ThemeContext } from '../../contexts';
import { mdiWhiteBalanceSunny , mdiMoonWaningCrescent} from '@mdi/js';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === 'CONSTANTE.THEME.LIGHT' ? 'CONSTANTE.THEME.DARK' : 'CONSTANTE.THEME.LIGHT');
  };

  return (
    <header>
      <button onClick={changeTheme}>
        {theme === 'CONSTANTE.THEME.LIGHT' ? <Icon path={mdiMoonWaningCrescent} size={1}/> : <Icon pass={mdiWhiteBalanceSunny} size={1}/>}
      </button>
    </header>
  );
};

export default Header;