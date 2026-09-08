import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../data/catalog';
import { SITE } from '../data/site';
import { useLanguage, useT } from '../lib/i18n';
import { Eyebrow, Reveal } from './chrome';

export function HeroCatalog() {
  const { locale } = useLanguage();
  const t = useT();
  const [active, setActive] = useState(0);
  const banners = SITE.banners;
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % banners.length), 6000);
    return () => window.clearInterval(timer);
  }, [banners.length]);
  const move = (direction) => setActive((value) => (value + direction + banners.length) % banners.length);
  return (
    <section className="hero-banner" data-component="hero-banner" onKeyDown={(event) => {
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    }} tabIndex={0} aria-roledescription={locale === 'zh' ? '轮播图' : 'carousel'}>
      <div className="hero-slides">
        {banners.map((banner, index) => (
          <article key={banner.image} className={`hero-slide${active === index ? ' is-active' : ''}`} aria-hidden={active !== index}>
            <img src={banner.image} alt={t(banner.alt)} loading={index === 0 ? 'eager' : 'lazy'} />
            <div className="hero-overlay" />
            <div className="container hero-banner-content">
              <div className="hero-content-panel">
                <Eyebrow>{t(banner.eyebrow)}</Eyebrow>
                <h1>{t(banner.h1)}</h1>
                <p className="hero-deck">{t(banner.deck)}</p>
                {banner.stats && <div className="hero-stats" aria-label={locale === 'zh' ? '公司数据' : 'Company facts'}>{banner.stats.map((stat) => <div key={stat.value}><strong>{stat.value}</strong><span>{t(stat.label)}</span></div>)}</div>}
                <div className="hero-actions">
                  <Link to="/contact" className="btn btn--noir">{t(SITE.heroActions.primary)}</Link>
                  <Link to={banner.categoryLink || '/products'} className="link-arrow">{t(SITE.heroActions.secondary)} →</Link>
                </div>
                <p className="hero-trust">{t(SITE.heroActions.trust)}</p>
              </div>
              <p className="hero-caption">{t(banner.caption)}</p>
            </div>
          </article>
        ))}
      </div>
      <button type="button" className="hero-arrow hero-arrow--prev" onClick={() => move(-1)} aria-label={locale === 'zh' ? '上一张' : 'Previous slide'}>←</button>
      <button type="button" className="hero-arrow hero-arrow--next" onClick={() => move(1)} aria-label={locale === 'zh' ? '下一张' : 'Next slide'}>→</button>
      <div className="hero-dots" role="tablist" aria-label={locale === 'zh' ? 'Banner 切换' : 'Banner slides'}>
        {banners.map((banner, index) => <button key={banner.image} type="button" className={active === index ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`${locale === 'zh' ? '第' : 'Slide'} ${index + 1}`} aria-selected={active === index} />)}
      </div>
    </section>
  );
}

export function IndexList() {
  const t = useT();
  return <div className="index-list" data-component="category-index"><div className="index-inner">{CATEGORIES.map((c) => <Link key={c.slug} to={`/category/${c.slug}`} className="index-item"><b>{c.no}</b>{t(c.name)}</Link>)}</div></div>;
}

const localeAwareCategoryHeading = (t) => t({ zh: `${CATEGORIES.length} 个细分类目`, en: `${CATEGORIES.length} focused product categories` });

export function CategoryGrid({ limit }) {
  const t = useT();
  const visible = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;
  return (
    <section className="home-block" data-component="category-grid">
      <div className="container">
        <Reveal><Eyebrow gold>{t({ zh: '产品分类', en: 'PRODUCT CATEGORIES' })}</Eyebrow><div className="section-heading-row"><h2 className="display-section">{localeAwareCategoryHeading(t)}</h2><Link to="/products" className="link-arrow">{t({ zh: '查看全部产品', en: 'View all products' })} →</Link></div></Reveal>
        <div className="category-detail-grid">{visible.map((c) => <Link key={c.slug} to={`/category/${c.slug}`} className="category-detail-card"><div className="category-detail-media"><img src={c.image} alt={t(c.name)} loading="lazy" /></div><div className="category-detail-body"><span>{c.no}</span><h3>{t(c.name)}</h3><p>{t(c.short)}</p><small>{c.count} {t({ zh: '款产品', en: 'products' })}</small></div></Link>)}</div>
      </div>
    </section>
  );
}

export function NoirSpotlight() {
  const t = useT();
  const s = SITE.spotlight;
  return <section className="section section--noir noir" data-component="noir-spotlight"><div className="container spot-grid"><Reveal className="spot-copy"><Eyebrow>{t(s.eyebrow)}</Eyebrow><blockquote>{t(s.quote)}</blockquote><Link to="/category/crystal-ball-sphere" className="link-arrow">{t(s.cta)} →</Link></Reveal><Reveal className="spot-media"><figure><img src={s.image} alt={t(s.caption)} loading="lazy" /><figcaption className="plate-caption">{t(s.caption)}</figcaption></figure></Reveal></div></section>;
}

export function FactoryCred() {
  const t = useT();
  const f = SITE.factory;
  return <section className="home-block" data-component="factory-cred"><div className="container factory-grid"><Reveal className="factory-media"><figure><img src={f.image} alt={t(f.caption)} loading="lazy" /><figcaption className="plate-caption">{t(f.caption)}</figcaption></figure></Reveal><Reveal><Eyebrow gold>{t(f.eyebrow)}</Eyebrow><h2 className="display-section section-title">{t(f.heading)}</h2><p className="lede-muted">{t(f.body)}</p><ul className="cap-list">{f.capabilities.map((c) => <li key={c.no}><span className="cap-no">{c.no}</span><span className="cap-title">{t(c.title)}</span><p className="cap-copy">{t(c.copy)}</p></li>)}</ul><Link to="/about" className="link-arrow">{t({ zh: '查看公司实景', en: 'View company facilities' })} →</Link></Reveal></div></section>;
}

export function CompanyGallery({ limit }) {
  const t = useT();
  const items = limit ? SITE.companyGallery.slice(0, limit) : SITE.companyGallery;
  return <section className="home-block" data-component="company-gallery"><div className="container"><Reveal><Eyebrow gold>{t({ zh: '真实公司与设施', en: 'REAL COMPANY & FACILITIES' })}</Eyebrow><h2 className="display-section section-title">{t({ zh: '来自祥福水晶的现场图片', en: 'Inside Xiangfu Crystal' })}</h2></Reveal><div className="company-gallery-grid">{items.map((item) => <Reveal key={item.image} className="company-gallery-item"><img src={item.image} alt={t(item.title)} loading="lazy" /><div><h3>{t(item.title)}</h3><p>{t(item.copy)}</p></div></Reveal>)}</div></div></section>;
}

export function ProcessSteps() {
  const t = useT();
  return <section className="section--tight home-block" data-component="process-steps"><div className="container"><Reveal><Eyebrow gold>{t(SITE.process.eyebrow)}</Eyebrow><h2 className="display-section section-title">{t(SITE.process.heading)}</h2></Reveal><div className="steps-grid">{SITE.process.steps.map((step) => <Reveal key={step.no} className="step"><span className="step-no">{step.no}</span><h3>{t(step.title)}</h3><p>{t(step.copy)}</p></Reveal>)}</div></div></section>;
}

export function ProductCard({ p }) {
  const t = useT();
  return <Link to={`/product/${p.slug}`} className="product-card" data-component="product-card"><div className="pc-media"><img src={p.img} alt={t(p.name)} loading="lazy" /></div><div className="pc-body"><span className="pc-plate">{p.plate}</span><h3 className="pc-name">{t(p.name)}</h3><p className="pc-material">{t(p.material)}</p><div className="pc-foot"><span>{t({ zh: 'MOQ 1KG', en: 'MOQ 1KG' })}</span><span>{t({ zh: '查看详情 →', en: 'Details →' })}</span></div></div></Link>;
}

export function ProductGrid({ products, cols = 4 }) {
  return <div className={`grid-cards${cols === 3 ? ' grid-cards--3' : ''}`} data-component="product-grid">{products.map((p) => <ProductCard key={p.slug} p={p} />)}</div>;
}

export function FilterBar({ options, active, onChange }) {
  const t = useT();
  return <div className="chips" role="group" aria-label={t({ zh: '产品分类筛选', en: 'Product category filter' })}>{options.map((o) => <button key={o.value} type="button" className="chip" aria-pressed={active === o.value} onClick={() => onChange(o.value)}>{t(o.label)}</button>)}</div>;
}

export function SpecTable({ rows }) {
  return <table className="spec-table" data-component="spec-table"><tbody>{rows.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table>;
}

export function CrossCategoryNav({ current }) {
  const t = useT();
  return <nav className="cross-nav" aria-label={t({ zh: '其他产品分类', en: 'Other categories' })}>{CATEGORIES.filter((c) => c.slug !== current).slice(0, 6).map((c) => <Link key={c.slug} to={`/category/${c.slug}`}>{t(c.name)} →</Link>)}</nav>;
}

export const allProductsForCat = (catSlug) => PRODUCTS.filter((p) => p.cat === catSlug);
export const categoryOptions = () => [{ value: 'all', label: { zh: '全部产品', en: 'All Products' } }, ...CATEGORIES.map((c) => ({ value: c.slug, label: c.name }))];

export function useFilteredProducts(active) {
  return useMemo(() => active === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active), [active]);
}
