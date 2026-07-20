import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEO({ 
  title = "KBrown Consultant | Premium Financial Consulting", 
  description = "KBrown Consultant provides premium financial education, business funding guidance, and strategic consulting for entrepreneurs and growing businesses.", 
  name = "KBrown Consultant", 
  type = "website",
  noindex = false
}: SEOProps) {
  const currentUrl = window.location.href;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={currentUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={name} />
      {/* Replace with your actual image URL when available */}
      <meta property="og:image" content="https://www.kbrownconsultant.com/og-image.jpg" />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://www.kbrownconsultant.com/og-image.jpg" />
    </Helmet>
  );
}
