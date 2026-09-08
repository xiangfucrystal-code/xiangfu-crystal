import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { useLanguage, useT } from '../lib/i18n';
import { Eyebrow, Reveal } from './chrome';

export function PostCard({ post }) {
  const t = useT();
  return <Link to={`/journal/${post.slug}`} className="post-card" data-component="post-card"><div className="post-media"><img src={post.image} alt="" loading="lazy" /></div><div className="post-body"><div className="post-meta">{t(post.category)} · {post.date}</div><h3 className="post-title">{t(post.title)}</h3><p className="post-excerpt">{t(post.excerpt)}</p></div></Link>;
}

export function JournalTeaser() {
  const t = useT();
  return <section className="home-block" data-component="journal-teaser"><div className="container"><Reveal><Eyebrow gold>{t({ zh: '采购指南', en: 'SOURCING JOURNAL' })}</Eyebrow><div className="section-heading-row"><h2 className="display-section">{t({ zh: '水晶采购知识', en: 'Crystal sourcing notes' })}</h2><Link to="/journal" className="link-arrow">{t({ zh: '查看全部', en: 'View all' })} →</Link></div></Reveal><div className="posts-grid">{POSTS.map((p) => <PostCard key={p.slug} post={p} />)}</div></div></section>;
}

export function ArticleContent({ post }) {
  const t = useT();
  const { locale } = useLanguage();
  return <article className="article-shell"><header className="article-header"><Eyebrow gold>{t(post.category)}</Eyebrow><h1 className="display-hero">{t(post.title)}</h1><div className="article-meta">{locale === 'zh' ? '祥福水晶业务团队' : 'Xiangfu Crystal Sales Team'} · {post.date}</div></header><figure className="article-hero"><img src={post.image} alt={t(post.title)} /></figure><div className="article-body">{post.body.map((segment, index) => segment.h ? <h2 key={index}>{t(segment.h)}</h2> : <p key={index}>{t(segment.p)}</p>)}</div><div className="inquiry-inline"><p>{t({ zh: '有具体采购需求？发送产品编号与数量获取报价。', en: 'Have a sourcing request? Send product references and quantities for a quote.' })}</p><Link to="/contact" className="btn btn--primary">{t({ zh: '立即询盘', en: 'Start an Inquiry' })}</Link></div></article>;
}
