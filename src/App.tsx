import { Routes, Route } from 'react-router';

import Layout from './layouts/Layout.tsx';
import Home from './pages/Home.tsx';

import TextReveal from './features/textReveal/TextReveal.tsx';
import textRevealJson from './features/textReveal/textReveal.json';
import type { TextRevealItemProps } from './features/textReveal/types.ts';

import Tenzies from './features/tenzies/Tenzies.tsx';

import Portfolio from './features/portfolio/Portfolio.tsx';
import Jumps from './features/portfolio/Jumps.tsx';
import Axiata from './features/portfolio/Axiata.tsx';
import RSH from './features/portfolio/RSH.tsx';
import MBC from './features/portfolio/MBC.tsx';
import MOTD from './features/portfolio/MOTD.tsx';
import CA from './features/portfolio/CA.tsx';

import './App.scss';

export default function App() {
  function toAllowedCols(n: number): 1 | 2 | 3 | 4 {
    // Only allow valid values, default to '1'
    return [1, 2, 3, 4].includes(n) ? (n as 1 | 2 | 3 | 4) : 1;
  }

  function toHoverStyle(s: string): 'icon' | 'zoom' {
    // Only allow valid values, default to 'icon'
    return s === 'zoom' ? 'zoom' : 'icon';
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='textreveal' element={
          <TextReveal
            items={textRevealJson._items as TextRevealItemProps[]}
            itemsPerRowDesktop={toAllowedCols(textRevealJson._itemsPerRowDesktop)}
            itemsPerRowTablet={toAllowedCols(textRevealJson._itemsPerRowTablet)}
            itemsPerRowMobile={toAllowedCols(textRevealJson._itemsPerRowMobile)}
            itemGap={textRevealJson._itemGap}
            itemImageHeight={textRevealJson._itemImageHeight}
            hoverStyle={toHoverStyle(textRevealJson._hoverStyle)}
            popupCloseButtonLabel={textRevealJson.popupCloseButtonLabel}
          />
        } />

        <Route path='tenzies' element={<Tenzies />} />

        <Route path='portfolio'>
          <Route index element={<Portfolio />} />
          <Route path='jumps' element={<Jumps />} />
          <Route path='axiata' element={<Axiata />} />
          <Route path='rsh' element={<RSH />} />
          <Route path='mbc' element={<MBC />} />
          <Route path='motd' element={<MOTD />} />
          <Route path='ca' element={<CA />} />
        </Route>

      </Route>
    </Routes>
  );
}
