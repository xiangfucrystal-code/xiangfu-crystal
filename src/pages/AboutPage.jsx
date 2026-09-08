import { usePageMeta, JsonLd, orgLd } from '../lib/seo';
import { SITE } from '../data/site';
import { useLanguage, useT } from '../lib/i18n';
import { Eyebrow, InquiryBand } from '../components/chrome';
import { CompanyGallery, ProcessSteps } from '../components/catalog';

export default function AboutPage() {
  const { locale } = useLanguage();
  const t = useT();
  usePageMeta({ title: locale === 'zh' ? '关于祥福水晶 — 江苏东海天然水晶供应商' : 'About Xiangfu Crystal — Natural Crystal Supplier in Donghai', description: locale === 'zh' ? '东海县祥福珠宝贸易有限公司成立于 2011 年，团队拥有约 15 年水晶设计开发经验，提供批发与 OEM/ODM 服务。' : 'Founded in 2011, Xiangfu Crystal is supported by a team with around 15 years of crystal design and development experience.' });
  return <><JsonLd data={orgLd(SITE.brand, SITE.legalName)} /><section className="page-header"><div className="container"><Eyebrow gold>{t({ zh: '关于我们', en: 'ABOUT US' })}</Eyebrow><h1 className="display-hero">{locale === 'zh' ? SITE.legalNameZh : SITE.legalName}</h1><p className="deck lede-muted">{t(SITE.factory.body)}</p></div></section><section className="company-facts"><div className="container stats-band"><div className="stat"><b>{SITE.founded}</b><span>{t({ zh: '公司成立', en: 'Company founded' })}</span></div><div className="stat"><b>15+</b><span>{t({ zh: '年设计开发经验', en: 'Years design experience' })}</span></div><div className="stat"><b>21</b><span>{t({ zh: '精选细分类目', en: 'Featured categories' })}</span></div><div className="stat"><b>{SITE.moq}</b><span>{t({ zh: '常规起订量', en: 'Standard MOQ' })}</span></div></div></section><CompanyGallery /><ProcessSteps /><InquiryBand /></>;
}
