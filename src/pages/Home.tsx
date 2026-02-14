import { Link } from 'react-router';
import appJson from '../App.json';

export default function Home() {
  return (
    <div
      className='home'
      data-testid="home-page"
    >

      <header className='home__header'>
        <div className='home__header-inner'>

          <div className='home__header-profile'>
            <img
              className='home__header-profile-image'
              src={appJson._img._src}
              alt={appJson._img.alt || undefined}
              aria-hidden={!appJson._img.alt}
            />
          </div>

          <div className='home__header-info'>
            <div className='home__header-title'>
              <h1
                className='home__header-title-inner'
                dangerouslySetInnerHTML={{__html: appJson.title}}
                data-testid='home-heading'
              />
            </div>

            <div className='home__header-subtitle'>
              <h2
                className='home__header-subtitle-inner'
                dangerouslySetInnerHTML={{__html: appJson.subtitle}}
              />
            </div>

            <div className='home__header-body'>
              <div
                className='home__header-body-inner'
                dangerouslySetInnerHTML={{__html: appJson.body}}
                data-testid='home-body'
              />
            </div>
          </div>

        </div>
      </header>

      <section className='home__container'>
        <div className='home__container-inner'>

          <ul className='home__list'>
            {appJson._items.map(item => (
            !item._isHidden &&
              <li
                className='home__list-item'
                key={item._link}
              >
                {item._img._src &&
                <div className='home__list-item-image-container'>
                  <img
                    className='home__list-item-image'
                    src={item._img._src}
                    alt={item._img.alt || undefined}
                    aria-hidden={!item._img.alt}
                  />
                </div>
                }

                <div
                  className='home__list-item-title'
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <Link
                  className='home__list-item-link'
                  to={`/${item._link}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M6 13h6v4l6-5-6-5v4H6z"/></svg>
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>

    </div>
  );
}
