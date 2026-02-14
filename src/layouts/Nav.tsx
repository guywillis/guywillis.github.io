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
            alt={nav._img.alt || undefined}
            aria-hidden={!nav._img.alt}
          />
        </div>

        {nav._items.map(item => (
          <NavLink
            key={item._url}
            to={`/${item._url}`}
            className='nav__link'
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
        ))}

      </div>
    </nav>
  );
}
