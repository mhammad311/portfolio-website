import { useEffect } from 'react';

const DEFAULT_TITLE = 'Hamad Hussain | Full Stack Developer';
const DEFAULT_DESCRIPTION =
  'Hamad Hussain builds fast, secure, and conversion-focused websites, e-commerce stores, and full-stack web applications for businesses and agencies.';

const upsertMeta = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });
};

export const usePageMeta = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  robots = 'index, follow',
}) => {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
  }, [description, robots, title]);
};

export default usePageMeta;
