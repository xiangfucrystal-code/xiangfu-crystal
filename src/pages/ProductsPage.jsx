import { useState } from 'react';
import { usePageMeta } from '../lib/seo';
import { PRODUCTS } from '../data/catalog';
import { useLanguage, useT } from '../lib/i18n';
import { Breadcrumb, Eyebrow, InquiryBand } from '../components/chrome';
import { ProductGrid, FilterBar, categoryOptions, useFilteredProducts } from '../components/catalog';

export default function ProductsPage() {
  const { locale } = useLanguage();
  const t = useT();
  const [filter, setFilter] = useState('all');
  const shown = useFilteredProducts(filter);
  usePageMeta({ title: locale === 'zh' ? '产品中心 — 56 款精选天然水晶产品 | 祥福水晶' : 'Products — 56 Featured Crystal Items | Xiangfu Crystal', description: locale === 'zh' ? '浏览 21 个细分类目和 56 款精选水晶产品，每款均有独立详情与询盘入口，MOQ 1KG。' : 'Browse 21 detailed categories and 56 featured crystal products with dedicated detail pages and inquiry paths. MOQ 1KG.' });
  return <><Breadcrumb items={[{ label: t({ zh: '首页', en: 'Home' }), to: '/' }, { label: t({ zh: '产品中心', en: 'Products' }) }]} /><section className="page-header"><div className="container"><Eyebrow gold>{t({ zh: '产品目录', en: 'PRODUCT CATALOG' })}</Eyebrow><h1 className="display-hero">{t({ zh: '56 款精选水晶产品', en: '56 Featured Crystal Products' })}</h1><p className="deck lede-muted">{t({ zh: '覆盖 21 个细分类目。点击任意产品进入详情页，查看材质、MOQ、定制能力并直接询盘；更多国际站产品可按需求继续同步。', en: 'Across 21 focused categories. Open any product for material, MOQ, customization and direct inquiry details; more storefront products can be synchronized on request.' })}</p><p className="catalog-count">{shown.length} / {PRODUCTS.length} {t({ zh: '款产品', en: 'products' })}</p></div></section><section className="home-block"><div className="container"><FilterBar options={categoryOptions()} active={filter} onChange={setFilter} /><ProductGrid products={shown} /></div></section><InquiryBand /></>;
}
