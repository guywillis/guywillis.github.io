import { Outlet } from 'react-router';
import Nav from './Nav.tsx';
import Footer from './Footer.tsx';
import appJson from '../App.json';

export default function Layout() {
  return (
    <>
      <Nav />

      <main
        className='main'
        data-testid='main-content'
      >
        <Outlet />
      </main>

      <Footer />

      <div
        className='aria-label'
        dangerouslySetInnerHTML={{ __html: appJson._accessibility.pageEnd }}
      />
    </>
  );
}
