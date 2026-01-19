import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import appJson from '../App.json';

export default function Layout() {
  return (
    <>
      <Nav />

      <main className='main'>
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
