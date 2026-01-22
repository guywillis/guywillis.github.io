import GalleryItem from './PortfolioItem.jsx';
import portfolioJson from './portfolio.json';

export default function MBC() {
  const content = portfolioJson._mbc;
  const items = content._items;

  return (
    <GalleryItem
      title={content.title}
      body={content.body}
      items={items}
      itemsAreFullWidth={content._itemsAreFullWidth}
    />
  )
}
