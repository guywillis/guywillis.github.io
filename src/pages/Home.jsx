import { Link } from 'react-router';
import appJson from '../App.json';

export default function Home() {
  return (
    <div className='home'>

      <header className='home__header'>
        <div className='home__header-inner'>

          <div className='home__header-profile'>
            <img
              className='home__header-profile-image'
              src={appJson._img._src}
              alt={appJson._img.alt}
            />
          </div>

          <div className='home__header-info'>
            <div className='home__header-title'>
              <h1
                className='home__header-title-inner'
                dangerouslySetInnerHTML={{__html: appJson.title}}
              />
            </div>

            <div className='home__header-subtitle'>
              <h2
                className='home__header-subtitle-inner'
                dangerouslySetInnerHTML={{__html: appJson.subtitle}}
              />
            </div>

            <div className='home__header-body'>
              <p
                className='home__header-body-inner'
                dangerouslySetInnerHTML={{__html: appJson.body}}
              />
            </div>
          </div>

        </div>
      </header>

      <section className='home__container'>
        <div className='home__container-inner'>

          <ul className='home__container-list'>
            {appJson._items.map(item => (
            !item._isHidden &&
              <li
                className='home__container-list-item'
                key={item._link}
              >
                <div
                  className='home__container-list-item-title'
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />

                <Link
                  className='home__container-list-item-image'
                  to={`/${item._link}`}
                >
                  <img
                    src={item._img._src}
                    alt={item._img.alt || null}
                  />
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>

    </div>
  );
}
