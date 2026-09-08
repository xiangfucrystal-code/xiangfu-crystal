import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import { PRODUCTS } from '../data/catalog';
import { useLanguage, useT } from '../lib/i18n';
import { Eyebrow } from './chrome';
import { ProductCard } from './catalog';

export function Gallery({ product }) {
  const t = useT();
  return <figure data-component="gallery"><div className="frame"><img src={product.img} alt={t(product.name)} /></div><figcaption className="plate-caption">{product.plate} · {t({ zh: '真实国际站商品图片', en: 'Real Alibaba product image' })}</figcaption></figure>;
}

export function CtaActions({ product }) {
  const t = useT();
  const message = t({ zh: `您好，我想咨询产品 ${product.plate}：${product.titleZh}`, en: `Hello, I would like to inquire about ${product.plate}: ${product.titleEn}` });
  return <div className="cta-actions" data-component="cta-actions"><Link to={`/contact?product=${product.plate}`} className="btn btn--primary">{t({ zh: '询价此产品', en: 'Request a Quote' })}</Link><a href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="link-arrow">WhatsApp</a><a href={`mailto:${SITE.email}?subject=${encodeURIComponent(message)}`} className="cta-mail">{SITE.email}</a></div>;
}

export function SourceProductLink({ product }) {
  const t = useT();
  return <a className="source-product-link" href={product.sourceUrl} target="_blank" rel="noreferrer">{t({ zh: '查看国际站原始商品详情 ↗', en: 'View original Alibaba listing ↗' })}</a>;
}

export function RelatedProducts({ product, count = 4 }) {
  const t = useT();
  const related = PRODUCTS.filter((p) => p.cat === product.cat && p.slug !== product.slug).slice(0, count);
  if (!related.length) return null;
  return <section className="home-block" data-component="related-products"><div className="container"><Eyebrow gold>{t({ zh: '同类产品', en: 'RELATED PRODUCTS' })}</Eyebrow><h2 className="display-section section-title">{t({ zh: '您可能还需要', en: 'You may also need' })}</h2><div className="grid-cards">{related.map((p) => <ProductCard key={p.slug} p={p} />)}</div></div></section>;
}

export function productSpecRows(product, locale) {
  const t = (value) => typeof value === 'object' ? value[locale] : value;
  return [
    [locale === 'zh' ? '产品编号' : 'Product reference', product.plate],
    [locale === 'zh' ? '产品分类' : 'Category', t(product.category)],
    [locale === 'zh' ? '材质' : 'Material', t(product.material)],
    [locale === 'zh' ? '尺寸' : 'Size', t(product.size)],
    ['MOQ', product.moq],
    [locale === 'zh' ? '定制服务' : 'Customization', t(product.customization)],
    [locale === 'zh' ? '交期' : 'Lead time', t(product.leadTime)],
    [locale === 'zh' ? '包装' : 'Packaging', t(product.packaging)],
  ];
}
