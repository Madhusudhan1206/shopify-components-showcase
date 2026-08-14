import { minimalist } from './data/minimalist';
import { gymshark } from './data/gymshark';

import MinAnnouncementBar from './components/minimalist/AnnouncementBar';
import MinNavbar from './components/minimalist/Navbar';
import MinHeroBannerStack from './components/minimalist/HeroBannerStack';
import MinProductCarousel from './components/minimalist/ProductCarousel';
import MinCategoryGrid from './components/minimalist/CategoryGrid';
import MinConcernTagGrid from './components/minimalist/ConcernTagGrid';
import MinValuePropStrip from './components/minimalist/ValuePropStrip';
import MinTrustBanner from './components/minimalist/TrustBanner';
import MinFooter from './components/minimalist/Footer';

import GsAnnouncementBar from './components/gymshark/AnnouncementBar';
import GsNavbar from './components/gymshark/Navbar';
import GsHero from './components/gymshark/Hero';
import GsActivityTileGrid from './components/gymshark/ActivityTileGrid';
import GsProductCarousel from './components/gymshark/ProductCarousel';
import GsEditorialBannerGrid from './components/gymshark/EditorialBannerGrid';
import GsCategoryTileGrid from './components/gymshark/CategoryTileGrid';
import GsNewsletterBanner from './components/gymshark/NewsletterBanner';
import GsFooter from './components/gymshark/Footer';

function ReferenceHeading({ eyebrow, title, url }) {
  return (
    <div className="ref-heading">
      <span className="ref-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <a href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <div className="page-intro">
        <h1>Shopify Reference Component Showcase</h1>
        <p>
          A single-page inventory of reusable UI sections extracted from two Shopify
          storefronts, rebuilt with placeholder imagery and paraphrased copy only.
        </p>
      </div>

      <section className="reference-block theme-minimalist">
        <ReferenceHeading
          eyebrow="Reference 1 · Skincare, minimal"
          title="Minimalist-inspired components"
          url="https://beminimalist.co"
        />
        <MinAnnouncementBar {...minimalist.announcement} />
        <MinNavbar {...minimalist.nav} />
        <MinHeroBannerStack banners={minimalist.heroBanners} />
        <MinProductCarousel {...minimalist.bestSellers} />
        <MinCategoryGrid title={minimalist.categories.title} items={minimalist.categories.items} />
        <MinConcernTagGrid title={minimalist.concerns.title} items={minimalist.concerns.items} />
        <MinProductCarousel {...minimalist.newLaunches} />
        <MinValuePropStrip {...minimalist.valueProps} />
        <MinTrustBanner {...minimalist.trustBanner} />
        <MinFooter {...minimalist.footer} />
      </section>

      <section className="reference-block theme-gymshark">
        <ReferenceHeading
          eyebrow="Reference 2 · Athletic, bold"
          title="Gymshark-inspired components"
          url="https://www.gymshark.com"
        />
        <GsAnnouncementBar {...gymshark.announcement} />
        <GsNavbar {...gymshark.nav} />
        <GsHero {...gymshark.hero} />
        <GsActivityTileGrid title={gymshark.activityTiles.title} items={gymshark.activityTiles.items} />
        <GsProductCarousel {...gymshark.newReleases} />
        <GsEditorialBannerGrid banners={gymshark.editorial.banners} />
        <GsCategoryTileGrid title={gymshark.categoryTiles.title} items={gymshark.categoryTiles.items} />
        <GsNewsletterBanner {...gymshark.newsletter} />
        <GsFooter {...gymshark.footer} />
      </section>
    </main>
  );
}
