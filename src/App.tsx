import { Routes, Route } from 'react-router';

import Layout from './layouts/Layout.tsx';
import Home from './pages/Home.tsx';

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
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

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
