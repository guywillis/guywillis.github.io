import { useLocation, Link } from 'react-router';
import appJson from '../App.json';

import 'boxicons';

export default function Nav() {
  const nav = appJson._nav

  // const location = useLocation()

  return (
    <nav className='nav'>
      <div className='nav__inner'>

        <div className='nav__logo'>
          <img
            className='nav__logo-image'
            src={nav._img._src}
          />
        </div>

        {/* {location.pathname !== "/" && */}
          <Link
            className='nav__link'
            to='..'
            relative='path'
            aria-label={nav.home}
          >
            <box-icon
              type="regular"
              name="home-alt-2"
            />
          </Link>
        {/* } */}

      </div>
    </nav>
  );
}
