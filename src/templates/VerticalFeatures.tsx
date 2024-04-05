import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="" description="">
    <VerticalFeatureRow
      title="Object Maps"
      description="We'll generate high quality per-object masks for your images."
      image="/assets/images/birds_objects.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Detailed Reports"
      description="Get per-image information like object counts, sizes, coverage and more. Import into Excel, or get back JSON."
      image="/assets/images/birds_objects.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Heatmaps"
      description="Find hotspots or patterns in your images. Great for finding trends or anomalies."
      image="/assets/images/birds_objects.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
