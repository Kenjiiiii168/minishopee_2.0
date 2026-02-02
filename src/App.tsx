import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { CouponProvider } from './context/CouponContext';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { SellerCentre } from './pages/SellerCentre';
import { Vouchers } from './pages/Vouchers';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CouponProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
              <AnnouncementBar />
              <Navbar />
              <main className="flex-grow">
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/seller" element={<SellerCentre />} />
                  <Route path="/vouchers" element={<Vouchers />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </CouponProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
