import { useEffect } from 'react';

export function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    let el = document.querySelector('meta[name="description"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'description');
      document.head.appendChild(el);
    }
    el.setAttribute('content', description);
  }, [title, description]);
}

export function JsonLd({ data }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.dataset.jsonld = 'true';
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [data]);
  return null;
}

export const orgLd = (name, legalName) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name,
  legalName,
  description:
    'Natural crystal manufacturer and exporter from Donghai, Jiangsu. Wholesale crystal products, MOQ 1KG and OEM/ODM services.',
  foundingDate: '2011',
  email: 'jimmyxfjewelry@163.com',
  telephone: '+86-13357863235',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wangxi Village',
    addressLocality: 'Donghai County',
    addressRegion: 'Jiangsu',
    addressCountry: 'CN',
  },
});

export const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  // Absolute "item" URLs are added after the production domain is known.
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.label,
  })),
});
