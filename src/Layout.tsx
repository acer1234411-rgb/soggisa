import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import RouteScrollReset from './components/common/RouteScrollReset';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <RouteScrollReset />
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
