import { Link } from 'react-router-dom';
import { usePageMeta } from '../lib/seo';
import { useLanguage, useT } from '../lib/i18n';

export default function NotFoundPage() {
  const { locale } = useLanguage();
  const t = useT();
  usePageMeta({ title: locale === 'zh' ? '页面未找到 | 祥福水晶' : 'Page Not Found | Xiangfu Crystal', description: locale === 'zh' ? '未找到此页面。' : 'This page could not be found.' });
  return <section className="notfound"><div className="big">404</div><h1 className="display-section">{t({ zh: '未找到此页面', en: 'Page not found' })}</h1><p className="lede-muted">{t({ zh: '您访问的页面可能已移动，请返回产品目录。', en: 'The page may have moved. Return to the product catalog.' })}</p><Link to="/products" className="btn btn--primary">{t({ zh: '返回产品中心', en: 'Back to Products' })}</Link></section>;
}
