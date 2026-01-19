import { NavLink } from 'react-router';
import appJson from '../App.json';

export default function Nav() {
  const nav = appJson._nav;

  return (
    <nav className='nav'>
      <div className='nav__inner'>

        <div className='nav__logo'>
          <img
            className='nav__logo-image'
            src={nav._img._src}
          />
        </div>

        <NavLink
          className='nav__link'
          to='/'
        >
          {nav.home}
        </NavLink>
        <NavLink
          className='nav__link'
          to='/portfolio'
        >
          PORT
        </NavLink>

      </div>
    </nav>
  );
}
