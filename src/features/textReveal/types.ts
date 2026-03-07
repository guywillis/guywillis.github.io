export type TextRevealProps = {
  items: TextRevealItemProps[];
  itemsPerRowDesktop: 1 | 2 | 3 | 4;
  itemsPerRowTablet: 1 | 2 | 3 | 4;
  itemsPerRowMobile: 1 | 2 | 3 | 4;
  itemGap: number;
  itemImageHeight: number;
  itemHorizontalAlignment?: 'flex-start' | 'center' | 'flex-end';
  itemTitleVerticalAlignment?: 'above' | 'below' | 'hidden';
  itemTitleHorizontalAlignment?: 'start' | 'center' | 'end';
  hoverStyle: 'icon' | 'zoom';
  iconShape?: IconShape | null;
  iconPosition?: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  itemImageZoomScale?: number;
  itemImageZoomDuration?: number;
  itemImageZoomEasing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  popupTitleHeadingLevel?: HeadingLevel;
  popupCloseButtonLabel: string;
}

export type TextRevealItemProps = {
  id?: number;
  title: string;
  _img?: {
    _src: string;
    alt?: string;
  };
  _popup: TextRevealPopupProps;
};

export type TextRevealPopupProps = {
  title: string;
  body: string;
  _img?: {
    _src: string;
    alt?: string;
  };
  imagePlacement: 'right' | 'left' | 'bottom' | 'top';
};

export type IconShape = {
  key: string;
  name: string;
  path: [number, number, string];
}

export type HeadingLevel = 'h1' | 'h2';
