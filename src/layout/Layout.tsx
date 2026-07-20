import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../components/CustomCursor';
import PageTransition from '../animations/PageTransition';

export default function Layout() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <PageTransition>
        <div className="min-h-screen">
          <Outlet />
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}
