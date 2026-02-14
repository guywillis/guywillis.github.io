import PortfolioItem from './PortfolioItem.tsx';
import portfolioJson from './portfolio.json';

export default function RSH() {
  const content = portfolioJson._rsh;
  const items = content._items;

  return (
    <PortfolioItem
      id={content._id}
      title={content.title}
      body={content.body}
      items={items}
      itemsAreFullWidth={content._itemsAreFullWidth}
    />
  )
}
