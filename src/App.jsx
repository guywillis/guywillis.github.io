import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';

import Tenzies from './features/tenzies/Tenzies.jsx';

import Portfolio from './features/portfolio/Portfolio.jsx';
import Jumps from './features/portfolio/Jumps.jsx';
import Axiata from './features/portfolio/Axiata.jsx';
import RSH from './features/portfolio/RSH.jsx';
import MBC from './features/portfolio/MBC.jsx';
import MOTD from './features/portfolio/MOTD.jsx';
import CA from './features/portfolio/CA.jsx';

import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
