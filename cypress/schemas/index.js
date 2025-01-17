import { combineSchemas } from '@cypress/schema-tools';

import articleVersions from './article-schema';
import breadCrumbVersions from './breadcrumb-schema';
import blogVersions from './blog-schema';
import courseVersions from './course-schema';
import localBusiness from './local-business-schema';
import logoVersions from './logo-schema';
import productVersions from './product-schema';
import socialProfileVersions from './social-profile-schema';
import corporateContactVersions from './corporate-contact-schema';
import newsarticleVersions from './newsarticle-schema';

const schemas = combineSchemas(
  articleVersions,
  breadCrumbVersions,
  blogVersions,
  courseVersions,
  localBusiness,
  logoVersions,
  productVersions,
  socialProfileVersions,
  corporateContactVersions,
  newsarticleVersions,
);
export default schemas;
