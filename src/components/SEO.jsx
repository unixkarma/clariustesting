import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://clarius.ec';
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`;
const SITE_NAME = 'Clarius Ecuador';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
}) => {
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || DEFAULT_IMAGE} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_EC" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEO;
