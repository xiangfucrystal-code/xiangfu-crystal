import { usePageMeta } from '../lib/seo';
import { POSTS } from '../data/posts';
import { useLanguage, useT } from '../lib/i18n';
import { Eyebrow, InquiryBand } from '../components/chrome';
import { PostCard } from '../components/blog';

export default function JournalPage() {
  const { locale } = useLanguage();
  const t = useT();
  usePageMeta({ title: locale === 'zh' ? '水晶采购指南 | 祥福水晶' : 'Crystal Sourcing Journal | Xiangfu Crystal', description: locale === 'zh' ? '天然水晶批发采购、供应商核查、MOQ 与 OEM/ODM 定制指南。' : 'Guides for crystal wholesale sourcing, supplier checks, MOQ and OEM/ODM.' });
  return <><section className="page-header"><div className="container"><Eyebrow gold>{t({ zh: '采购指南', en: 'SOURCING JOURNAL' })}</Eyebrow><h1 className="display-hero">{t({ zh: '水晶采购知识', en: 'Crystal Sourcing Notes' })}</h1><p className="deck lede-muted">{t({ zh: '帮助采购商理解材质、做工、MOQ、定制和供应商选择。', en: 'Practical guidance on material, finish, MOQ, customization and supplier selection.' })}</p></div></section><section className="container journal-list"><div className="posts-grid">{POSTS.map((p) => <PostCard key={p.slug} post={p} />)}</div></section><InquiryBand /></>;
}
