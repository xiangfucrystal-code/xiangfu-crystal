import { useParams, Navigate } from 'react-router-dom';
import { usePageMeta } from '../lib/seo';
import { catBySlug } from '../data/catalog';
import { useLanguage, useT } from '../lib/i18n';
import { Breadcrumb, Eyebrow, InquiryBand } from '../components/chrome';
import { ProductGrid, CrossCategoryNav, allProductsForCat } from '../components/catalog';

export default function CategoryPage() {
  const { slug } = useParams();
  const cat = catBySlug(slug);
  const { locale } = useLanguage();
  const t = useT();
  if (!cat) return <Navigate to="/products" replace />;
  const products = allProductsForCat(cat.slug);
  usePageMeta({ title: t(cat.seoTitle), description: t(cat.metaDesc) });
  return <><Breadcrumb items={[{ label: t({ zh: '首页', en: 'Home' }), to: '/' }, { label: t({ zh: '产品中心', en: 'Products' }), to: '/products' }, { label: t(cat.name) }]} /><section className="category-hero"><div className="container category-hero-grid"><div><Eyebrow gold>{locale === 'zh' ? `分类 ${cat.no}` : `CATEGORY ${cat.no}`}</Eyebrow><h1 className="display-hero">{t(cat.name)}</h1><p className="deck lede-muted">{t(cat.intro)}</p><p className="catalog-count">{products.length} {t({ zh: '款产品 · MOQ 1KG', en: 'products · MOQ 1KG' })}</p></div><img src={cat.image} alt={t(cat.name)} /></div></section><section className="home-block"><div className="container"><ProductGrid products={products} cols={3} /></div></section><section className="container"><CrossCategoryNav current={cat.slug} /></section><InquiryBand /></>;
}
