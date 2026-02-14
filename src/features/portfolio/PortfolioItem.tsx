type PortFolioItemType = {
  id: string;
  title: string;
  body: string;
  items: PortFolioItemItemsType[];
  itemsAreFullWidth: boolean;
}

type PortFolioItemItemsType = {
  _img: {
    _src: string;
    alt: string;
  }
}

export default function PortfolioItem({ id, title, body, items, itemsAreFullWidth }: PortFolioItemType) {
  const listImageClassName = `portfolio-item__container ${itemsAreFullWidth && 'items-are-full-width'}`;

  return (
    <div
      className='portfolio-item'
      data-testid={`${id}-page`}
    >

      <header className='portfolio-item__header'>
        <div className='portfolio-item__header-inner'>

          <div className='portfolio-item__title'>
            <h1
              className='portfolio-item__title-inner'
              dangerouslySetInnerHTML={{__html: title}}
              data-testid={`${id}-heading`}
            />
          </div>

          <div className='portfolio-item__header-body'>
            <div
              className='portfolio-item__header-body-inner'
              dangerouslySetInnerHTML={{__html: body}}
              data-testid={`${id}-body`}
            />
          </div>

        </div>
      </header>

      <article className={listImageClassName}>
        <div className='portfolio-item__container-inner'>
          {items.map((item, index) => (
            <div
              className='portfolio-item__item'
              key={index}
            >
              <img
                className='portfolio-item__item-image'
                src={item._img._src}
                alt={item._img.alt}
                aria-hidden={!item._img.alt}
              />
            </div>
          ))}
        </div>
      </article>

    </div>
  )
}
