import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { CouponProvider } from './context/CouponContext';
import { ProductProvider } from './context/ProductContext';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { SellerCentre } from './pages/SellerCentre';
import { AdminCentre } from './pages/AdminCentre';
import { Vouchers } from './pages/Vouchers';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <CouponProvider>
          <ProductProvider>
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
                    <Route path="/admin" element={<AdminCentre />} />
                    <Route path="/vouchers" element={<Vouchers />} />
                    <Route path="/search" element={<SearchPage />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </CartProvider>
          </ProductProvider>
        </CouponProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
