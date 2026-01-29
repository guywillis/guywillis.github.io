import PortfolioItem from './PortfolioItem.tsx';
import portfolioJson from './portfolio.json';

export default function CA() {
  const content = portfolioJson._ca;
  const items = content._items;

  return (
    <PortfolioItem
      title={content.title}
      body={content.body}
      items={items}
      itemsAreFullWidth={content._itemsAreFullWidth}
    />
  )
}
