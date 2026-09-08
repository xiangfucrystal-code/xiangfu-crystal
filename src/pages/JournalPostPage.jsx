import { useParams, Navigate } from 'react-router-dom';
import { postBySlug } from '../data/posts';
import { usePageMeta } from '../lib/seo';
import { useT } from '../lib/i18n';
import { Breadcrumb, InquiryBand } from '../components/chrome';
import { ArticleContent } from '../components/blog';

export default function JournalPostPage() {
  const { slug } = useParams();
  const post = postBySlug(slug);
  const t = useT();
  if (!post) return <Navigate to="/journal" replace />;
  usePageMeta({ title: `${t(post.title)} | Xiangfu Crystal`, description: t(post.excerpt) });
  return <><Breadcrumb items={[{ label: t({ zh: '首页', en: 'Home' }), to: '/' }, { label: t({ zh: '采购指南', en: 'Journal' }), to: '/journal' }, { label: t(post.category) }]} /><ArticleContent post={post} /><InquiryBand /></>;
}
