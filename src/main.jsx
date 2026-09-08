import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './lib/i18n';
import './styles/tokens.css';
import './styles/base.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/enhancements.css';

import { AnnounceBar, SiteHeader, SiteFooter } from './components/chrome';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JournalPage from './pages/JournalPage';
import JournalPostPage from './pages/JournalPostPage';
import NotFoundPage from './pages/NotFoundPage';

document.documentElement.classList.add('js');

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}

function Layout() {
  const { locale } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">
        {locale === 'zh' ? '跳到主要内容' : 'Skip to content'}
      </a>
      <AnnounceBar />
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:slug" element={<JournalPostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollManager />
        <Layout />
      </BrowserRouter>
    </LanguageProvider>
  );
}

createRoot(document.getElementById('root')).render(<App />);
