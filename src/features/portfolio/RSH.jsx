import GalleryItem from './PortfolioItem.jsx';
import portfolioJson from './portfolio.json';

export default function RSH() {
  const content = portfolioJson._rsh;
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
