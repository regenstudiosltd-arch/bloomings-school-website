import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({ 
  title = 'Best Montessori School in East Airport | Bloomings Plus Montessori',
  description = 'Bloomings Plus Montessori offers authentic bilingual (English & French) Montessori education for children aged 15 months to 6 years in East Airport, Ghana. STEM, Robotics & flexible schedules.',
  keywords = 'Montessori school Ghana, Best Montessori school East Airport, bilingual preschool Accra, Montessori education, early childhood education Ghana, STEM preschool, French English school Ghana, toddler programs Accra'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Open Graph tags for social media
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', 'https://www.bmplusgh.com');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);

    // Additional SEO tags
    updateMetaTag('author', 'Bloomings Plus Montessori');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

  }, [title, description, keywords]);

  return null;
}

function updateMetaTag(property: string, content: string) {
  const isOg = property.startsWith('og:');
  const isTwitter = property.startsWith('twitter:');
  const selector = isOg || isTwitter ? `meta[property="${property}"]` : `meta[name="${property}"]`;
  
  let metaTag = document.querySelector(selector);
  if (metaTag) {
    metaTag.setAttribute('content', content);
  } else {
    const meta = document.createElement('meta');
    if (isOg || isTwitter) {
      meta.setAttribute('property', property);
    } else {
      meta.setAttribute('name', property);
    }
    meta.content = content;
    document.head.appendChild(meta);
  }
}
