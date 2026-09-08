import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE } from '../data/site';
import { CATEGORIES } from '../data/catalog';
import { useLanguage, useT } from '../lib/i18n';

export function Reveal({ as: Tag = 'div', children, className = '', ...rest }) {
  const ref = (node) => {
    if (!node || !document.documentElement.classList.contains('js')) return;
    const io = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    }), { threshold: 0.1 });
    io.observe(node);
  };
  return <Tag ref={ref} data-reveal className={className} {...rest}>{children}</Tag>;
}

export function Eyebrow({ children, gold = false }) {
  return <span className={`eyebrow${gold ? ' eyebrow--gold' : ''}`}>{children}</span>;
}

export function AnnounceBar() {
  const [open, setOpen] = useState(true);
  const t = useT();
  const { locale } = useLanguage();
  if (!open) return null;
  return (
    <div className="announce-bar">
      <div className="announce-inner">
        <span>{t(SITE.announcement)}</span>
        <button type="button" className="announce-close" onClick={() => setOpen(false)} aria-label={locale === 'zh' ? '关闭通知' : 'Dismiss announcement'}>
          {locale === 'zh' ? '关闭' : 'Close'}
        </button>
      </div>
    </div>
  );
}

export function LanguageSwitch() {
  const { locale, toggleLocale } = useLanguage();
  return (
    <button type="button" className="language-switch" onClick={toggleLocale} aria-label={locale === 'zh' ? '切换到英文' : 'Switch to Chinese'}>
      <span className={locale === 'zh' ? 'is-active' : ''}>中</span><i>/</i><span className={locale === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  );
}

export function SiteHeader() {
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();
  const t = useT();
  const { locale } = useLanguage();
  useEffect(() => setDrawer(false), [location.pathname]);
  useEffect(() => {
    if (!drawer) return undefined;
    const onKey = (e) => e.key === 'Escape' && setDrawer(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [drawer]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" aria-label={locale === 'zh' ? '祥福水晶首页' : 'Xiangfu Crystal home'}>
          <span className="wordmark-name">Xiangfu Crystal</span>
          <span className="wordmark-tag">{t(SITE.categoryMark)}</span>
        </Link>
        <nav className="site-nav" aria-label={locale === 'zh' ? '主导航' : 'Primary navigation'}>
          {SITE.nav.map((item) => <Link key={item.to} to={item.to}>{t(item.label)}</Link>)}
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <Link to="/contact" className="quote-link">{locale === 'zh' ? '获取报价' : 'Request a Quote'}</Link>
          <button type="button" className="nav-toggle" aria-expanded={drawer} aria-controls="drawer" onClick={() => setDrawer(true)}>
            {locale === 'zh' ? '菜单' : 'Menu'}
          </button>
        </div>
      </div>
      {drawer && <div className="drawer-backdrop" onClick={() => setDrawer(false)} aria-hidden="true" />}
      <div id="drawer" className={`drawer${drawer ? ' is-open' : ''}`} aria-hidden={!drawer}>
        <div className="drawer-head">
          <Eyebrow>{locale === 'zh' ? '导航' : 'Menu'}</Eyebrow>
          <button type="button" className="announce-close" onClick={() => setDrawer(false)}>{locale === 'zh' ? '关闭' : 'Close'}</button>
        </div>
        {SITE.nav.map((item) => <Link key={item.to} to={item.to}>{t(item.label)}</Link>)}
        <LanguageSwitch />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const t = useT();
  const { locale } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="wordmark"><span className="wordmark-name">Xiangfu Crystal</span></Link>
          <p>{locale === 'zh' ? '位于江苏东海水晶产业带，提供天然水晶产品批发、OEM/ODM 定制与全球询盘服务。' : 'Natural crystal wholesale and OEM/ODM from Donghai, Jiangsu, serving global buyers.'}</p>
        </div>
        <nav className="footer-col" aria-label={t(SITE.footerIndex.categories)}>
          <span className="footer-head">{t(SITE.footerIndex.categories)}</span>
          {CATEGORIES.slice(0, 7).map((c) => <Link key={c.slug} to={`/category/${c.slug}`}>{t(c.name)}</Link>)}
        </nav>
        <nav className="footer-col" aria-label={t(SITE.footerIndex.company)}>
          <span className="footer-head">{t(SITE.footerIndex.company)}</span>
          {SITE.footerIndex.companyLinks.map((c) => <Link key={c.to} to={c.to}>{t(c.label)}</Link>)}
          <div className="footer-founded">{locale === 'zh' ? `成立时间：${SITE.founded} 年` : `Founded: ${SITE.founded}`}</div>
          <div className="footer-founded">MOQ: {SITE.moq}</div>
        </nav>
        <div className="footer-contact">
          <span className="footer-head">{t(SITE.footerIndex.contact)}</span>
          <div><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
          <div><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: {SITE.whatsappDisplay}</a></div>
          <div>{t(SITE.address)}</div>
          <div>{t(SITE.hours)}</div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {locale === 'zh' ? SITE.legalNameZh : SITE.legalName}</span>
        <span>{locale === 'zh' ? '天然水晶批发 · OEM/ODM · MOQ 1KG' : 'Crystal wholesale · OEM/ODM · MOQ 1KG'}</span>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }) {
  const { locale } = useLanguage();
  return (
    <nav className="breadcrumb" aria-label={locale === 'zh' ? '面包屑导航' : 'Breadcrumb'}>
      <ol>{items.map((item, index) => item.to && index < items.length - 1 ? <li key={item.to}><Link to={item.to}>{item.label}</Link></li> : <li key={`${item.label}-${index}`} aria-current="page">{item.label}</li>)}</ol>
    </nav>
  );
}

export function InquiryBand({ heading, body, cta, noir = false }) {
  const t = useT();
  return (
    <section className={`section${noir ? ' section--noir noir' : ''}`} data-component="inquiry-band">
      <div className="inquiry-inner">
        <h2 className="display-section">{heading || t(SITE.inquiry.heading)}</h2>
        <p>{body || t(SITE.inquiry.body)}</p>
        <Link to="/contact" className={`btn ${noir ? 'btn--noir' : 'btn--primary'}`}>{cta || t(SITE.inquiry.cta)}</Link>
      </div>
    </section>
  );
}
