import { NavLink } from 'react-router';
import appJson from '../App.json';
import 'boxicons';

export default function Nav() {
  const nav = appJson._nav;

  return (
    <nav className='nav'>
      <div className='nav__inner'>

        <div className='nav__logo'>
          <img
            className='nav__logo-image'
            src={nav._img._src}
            alt={nav._img.alt || null}
            aria-hidden={!nav._img.alt}
          />
        </div>

        {nav._items.map(item => (
          <NavLink
            key={item._url}
            to={`/${item._url}`}
            className='nav__link'
          >
            {item._icon._isEnabled &&
              <box-icon
                type={item._icon._style}
                name={item._icon._src}
              />
            }
            {!item._icon._isEnabled && item.title}
          </NavLink>
        ))}

      </div>
    </nav>
  );
}
