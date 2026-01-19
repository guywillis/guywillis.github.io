import GalleryItem from './PortfolioItem.jsx'
import portfolioJson from './portfolio.json'

export default function MOTD() {
  const content = portfolioJson._motd;
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
