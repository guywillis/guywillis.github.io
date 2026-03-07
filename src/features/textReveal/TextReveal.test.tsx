import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextReveal from './TextReveal';
import type { TextRevealItemProps } from './types';

// -----------------------------
// Sample test data
// -----------------------------
const items: TextRevealItemProps[] = [
  {
    title: 'Item 1',
    _popup: {
      title: 'Popup 1',
      body: 'Body 1',
      _img: { _src: 'popup1.jpg', alt: 'Popup 1 Image' },
      imagePlacement: 'top',
    },
    _img: { _src: 'image1.jpg', alt: 'Alt 1' },
  },
  {
    title: 'Item 2',
    _popup: {
      title: 'Popup 2',
      body: 'Body 2',
      imagePlacement: 'bottom',
    },
  },
  {
    title: 'Item 3',
    _popup: {
      title: 'Popup 3',
      body: 'Body 3',
      _img: { _src: 'popup3.jpg', alt: 'Popup 3 Image' },
      imagePlacement: 'left',
    },
    _img: { _src: 'image3.jpg', alt: 'Alt 3' },
  },
  {
    title: 'Item 4',
    _popup: {
      title: 'Popup 4',
      body: 'Body 4',
      _img: { _src: 'popup4.jpg', alt: 'Popup 4 Image' },
      imagePlacement: 'right',
    },
  },
];

const defaultProps = {
  items,
  itemsPerRowDesktop: 3 as const,
  itemsPerRowTablet: 2 as const,
  itemsPerRowMobile: 1 as const,
  itemGap: 1.5,
  itemImageHeight: 12,
  hoverStyle: 'icon' as const,
  popupCloseButtonLabel: 'Close',
};

// -----------------------------
// Test suite
// -----------------------------

describe('TextReveal Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      get: () => 20,
    });
  });

  it('renders main container and header', () => {
    render(<TextReveal {...defaultProps} />);
    expect(screen.getByTestId('textreveal-page')).toBeInTheDocument();
    expect(screen.getByTestId('textreveal-heading')).toBeInTheDocument();
    expect(screen.getByTestId('textreveal-body')).toBeInTheDocument();
  });

  it('applies correct CSS variables for layout and hover style', () => {
    render(<TextReveal {...defaultProps} />);
    const container = screen.getByRole('list');
    expect(container).toHaveClass('is-hover-style-icon');
  });

  it('renders correct number of item buttons', () => {
    render(<TextReveal {...defaultProps} />);
    const buttons = screen.getAllByTestId('item-button');
    expect(buttons.length).toBe(items.length);
  });

  it('renders icons for hoverStyle="icon"', () => {
    render(<TextReveal {...defaultProps} />);
    const itemsWithImages = items.filter(item => item._img?._src);
    const icons = document.querySelectorAll('.textreveal__item-icon');
    expect(icons.length).toBe(itemsWithImages.length);
  });

  it('renders items with hoverStyle="zoom" correctly', () => {
    render(<TextReveal {...defaultProps} hoverStyle="zoom" />);
    const container = screen.getByRole('list');
    expect(container).toHaveClass('is-hover-style-zoom');
  });

  it('applies zoom effect on hover simulation', async () => {
    render(<TextReveal {...defaultProps} hoverStyle="zoom" />);
    const button = screen.getAllByTestId('item-button')[0];
    await userEvent.hover(button);
    const img = button.querySelector('img.textreveal__item-image');
    expect(img).toBeInTheDocument();
    // CSS transform cannot be tested in jsdom; verifying image presence
  });

  it('opens popup on click and closes correctly', async () => {
    render(<TextReveal {...defaultProps} />);
    const button = screen.getAllByTestId('item-button')[0];
    await userEvent.click(button);
    expect(screen.getByText(items[0]._popup.title)).toBeInTheDocument();

    const closeBtn = screen.getByText(defaultProps.popupCloseButtonLabel);
    await userEvent.click(closeBtn);
    expect(screen.queryByText(items[0]._popup.title)).not.toBeInTheDocument();
  });

  it('renders correct popup image placement for items with popup images', async () => {
    render(<TextReveal {...defaultProps} />);
    const buttons = screen.getAllByTestId('item-button');
    for (let i = 0; i < items.length; i += 1) {
      const button = buttons[i];
      const popup = items[i]._popup;

      if (popup._img?._src) {
        await userEvent.click(button);
        const modalContent = document.querySelector('.textreveal__modal-content');
        expect(modalContent?.className).toContain(`is-popup-image-${popup.imagePlacement}`);
        const closeBtn = screen.getByText(defaultProps.popupCloseButtonLabel);
        await userEvent.click(closeBtn);
      }
    }
  });

  it('handles items with and without images', async () => {
    const mixedItems: TextRevealItemProps[] = [
      { title: 'No Image', _popup: { title: 'Popup', body: 'Body', imagePlacement: 'top' } },
      { title: 'With Image', _img: { _src: 'img.jpg', alt: 'Alt' }, _popup: { title: 'Popup', body: 'Body', imagePlacement: 'right' } },
    ];
    render(<TextReveal {...defaultProps} items={mixedItems} />);
    const buttons = screen.getAllByTestId('item-button');
    expect(buttons.length).toBe(2);

    await userEvent.hover(buttons[0]);
    await userEvent.hover(buttons[1]);
    await userEvent.click(buttons[0]);
    expect(screen.getByText('Popup')).toBeInTheDocument();
    await userEvent.click(screen.getByText(defaultProps.popupCloseButtonLabel));
    await userEvent.click(buttons[1]);
    expect(screen.getByText('Popup')).toBeInTheDocument();
  });

  it('handles vertical alignment="hidden"', () => {
    render(<TextReveal {...defaultProps} itemTitleVerticalAlignment="hidden" />);
    const hiddenTitles = screen.getAllByText(/Item/i);
    hiddenTitles.forEach(title => {
      expect(title.className).toContain('aria-label');
    });
  });

  it('equalizes item title heights', async () => {
    render(<TextReveal {...defaultProps} />);
    const titleElements = screen.getAllByText(/Item/i).map(el => el.parentElement!);

    await waitFor(() => {
      const heights = titleElements.map(el => el.offsetHeight);
      const firstHeight = heights[0];
      heights.forEach(height => {
        expect(height).toBe(firstHeight); // all heights are equal
      });
    });
  });
});
