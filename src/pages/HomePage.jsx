import { usePageMeta, JsonLd, orgLd } from '../lib/seo';
import { SITE } from '../data/site';
import { PRODUCTS } from '../data/catalog';
import { useLanguage, useT } from '../lib/i18n';
import { InquiryBand } from '../components/chrome';
import { HeroCatalog, IndexList, CategoryGrid, NoirSpotlight, FactoryCred, CompanyGallery, ProcessSteps, ProductGrid } from '../components/catalog';
import { JournalTeaser } from '../components/blog';

export default function HomePage() {
  const { locale } = useLanguage();
  const t = useT();
  usePageMeta({ title: locale === 'zh' ? '祥福水晶 — 天然水晶批发、OEM/ODM 与全球出口' : 'Xiangfu Crystal — Wholesale Natural Crystal & OEM/ODM', description: locale === 'zh' ? '江苏东海天然水晶供应商，21 个细分类目、56 款精选商品，MOQ 1KG，支持 OEM/ODM 与全球询盘。' : 'Natural crystal supplier from Donghai, Jiangsu. 21 product categories, 56 featured products, MOQ 1KG, OEM/ODM and global inquiry.' });
  return <><JsonLd data={orgLd(SITE.brand, SITE.legalName)} /><HeroCatalog /><IndexList /><CategoryGrid limit={12} /><section className="home-block home-feature-products"><div className="container"><h2 className="display-section section-title">{t({ zh: '热门产品', en: 'Featured Products' })}</h2><ProductGrid products={PRODUCTS.slice(0, 8)} /></div></section><NoirSpotlight /><FactoryCred /><CompanyGallery limit={3} /><ProcessSteps /><JournalTeaser /><InquiryBand /></>;
}
