import { useParams, Navigate } from 'react-router-dom';
import { PRODUCTS, bySlug, catBySlug } from '../data/catalog';
import { usePageMeta } from '../lib/seo';
import { useLanguage, useT } from '../lib/i18n';
import { Breadcrumb, Eyebrow, InquiryBand } from '../components/chrome';
import { SpecTable } from '../components/catalog';
import { Gallery, CtaActions, SourceProductLink, RelatedProducts, productSpecRows } from '../components/product';

export default function ProductPage() {
  const { slug } = useParams();
  const product = bySlug(PRODUCTS, slug);
  const { locale } = useLanguage();
  const t = useT();
  if (!product) return <Navigate to="/products" replace />;
  const cat = catBySlug(product.cat);
  usePageMeta({ title: `${t(product.name)} | Xiangfu Crystal`, description: t(product.blurb) });
  return <><Breadcrumb items={[{ label: t({ zh: '首页', en: 'Home' }), to: '/' }, { label: t({ zh: '产品中心', en: 'Products' }), to: '/products' }, { label: t(cat.name), to: `/category/${cat.slug}` }, { label: t(product.name) }]} /><section className="pdp-grid"><div className="container pdp-inner"><Gallery product={product} /><div className="pdp-panel"><Eyebrow gold>{product.plate} · {t(cat.name)}</Eyebrow><h1>{t(product.name)}</h1><div className="pdp-meta">MOQ {product.moq} · OEM/ODM</div><p className="pdp-desc">{t(product.blurb)}</p><SpecTable rows={productSpecRows(product, locale)} /><CtaActions product={product} /><SourceProductLink product={product} /></div></div></section><RelatedProducts product={product} /><InquiryBand heading={t({ zh: '需要不同材质、尺寸或包装？', en: 'Need a different material, size or package?' })} body={t({ zh: '发送产品编号、目标数量和定制要求，我们会回复具体方案。', en: 'Send the product reference, target quantity and customization needs for a tailored response.' })} /></>;
}
