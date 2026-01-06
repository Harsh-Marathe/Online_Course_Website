import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import PaymentVerification from './pages/PaymentVerification';
import Confirmation from './pages/Confirmation';
import About from './pages/About';
import Contact from './pages/Contact';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './styles/design-system.css';
import './styles/animations.css';
import './styles/components.css';
import './styles/pages.css';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <CartProvider>
                        <div className="App">
                            <Navbar />
                            <CartDrawer />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/courses" element={<Home />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/payment-verification" element={<PaymentVerification />} />
                                <Route path="/confirmation" element={<Confirmation />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                            </Routes>
                            <Footer />
                        </div>
                    </CartProvider>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
