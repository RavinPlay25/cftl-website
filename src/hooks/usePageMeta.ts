import { useEffect } from 'react';

export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    const fullTitle = `${title} | College of Fast Track Learning`;
    document.title = fullTitle;

    const ensureMeta = (selector: string, attributes: Record<string, string>, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => meta?.setAttribute(key, value));
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    ensureMeta("meta[name='description']", { name: 'description' }, description);
    ensureMeta("meta[property='og:title']", { property: 'og:title' }, fullTitle);
    ensureMeta("meta[property='og:description']", { property: 'og:description' }, description);
    ensureMeta("meta[name='twitter:title']", { name: 'twitter:title' }, fullTitle);
    ensureMeta("meta[name='twitter:description']", { name: 'twitter:description' }, description);
  }, [description, title]);
};
