import { usePageMeta } from '../lib/seo';
import { useLanguage, useT } from '../lib/i18n';
import { Breadcrumb, Eyebrow } from '../components/chrome';
import { FormInquiry, ContactPanel } from '../components/forms';

export default function ContactPage() {
  const { locale } = useLanguage();
  const t = useT();
  usePageMeta({ title: locale === 'zh' ? '联系我们与获取报价 | 祥福水晶' : 'Contact & Request a Quote | Xiangfu Crystal', description: locale === 'zh' ? '通过邮箱或 WhatsApp 联系祥福水晶，询价天然水晶产品、MOQ 1KG 与 OEM/ODM 定制。' : 'Contact Xiangfu Crystal by email or WhatsApp for natural crystal products, MOQ 1KG and OEM/ODM.' });
  return <><Breadcrumb items={[{ label: t({ zh: '首页', en: 'Home' }), to: '/' }, { label: t({ zh: '联系我们', en: 'Contact' }) }]} /><section className="page-header"><div className="container"><Eyebrow gold>{t({ zh: '全球采购询盘', en: 'GLOBAL BUYER INQUIRY' })}</Eyebrow><h1 className="display-hero">{t({ zh: '联系我们', en: 'Contact Us' })}</h1><p className="deck lede-muted">{t({ zh: '请提供产品编号、数量、目的地与定制要求。', en: 'Share product references, quantity, destination and customization needs.' })}</p></div></section><section className="contact-split"><div className="container contact-inner"><FormInquiry /><ContactPanel /></div></section></>;
}
