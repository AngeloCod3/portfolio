import './Toggle.scss';
import Sun from '../../assets/sun.png'
import Moon from '../../assets/moon.png'
import { useContext } from 'react';
import { ThemeContext } from '../../Context';


const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = ()=> {
    theme.dispatch({type:'TOGGLE'})
  }

  return (
    <div className='toggle-container'>
        <img src={Sun} alt="Light Mode" className="t-icon" />
        <img src={Moon} alt="Dark Mode" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? '-1px' : '25px'}}></div>
    </div>
  )
}

export default Toggle