import { Link } from 'react-router';
import PortfolioContact from './PortfolioContact.tsx';
import portfolioJson from './portfolio.json';

export default function Portfolio() {
  return (
    <>
      <div
        className='portfolio'
        data-testid='portfolio-page'
      >
        <div className='portfolio__inner'>

          <header className='portfolio__header'>
            <div className='portfolio__header-inner'>

              <div className='portfolio__header-title'>
                <h1
                  className='portfolio__header-title-inner'
                  dangerouslySetInnerHTML={{__html: portfolioJson.title}}
                  data-testid='portfolio-heading'
                />
              </div>

              <div className='portfolio__header-body'>
                <div
                  className='portfolio__header-body-inner'
                  dangerouslySetInnerHTML={{__html: portfolioJson.body}}
                  data-testid='portfolio-body'
                />
              </div>

            </div>
          </header>

          <section className='portfolio__container items-are-third-width'>
            <div className='portfolio__container-inner'>

              <ul className='portfolio__container-list'>
                {portfolioJson._items.map(item => (
                <li
                  className='portfolio__container-list-item'
                  key={item._link}
                >
                  <Link
                    className='portfolio__container-list-item-image'
                    to={`/${item._link}`}
                  >
                    <img
                      src={item._img._src}
                      alt={item._img.alt || undefined}
                      aria-hidden={!item._img.alt}
                    />
                  </Link>
                </li>
                ))}
              </ul>

            </div>
          </section>

        </div>
      </div>

      <PortfolioContact />
    </>
  );
}
