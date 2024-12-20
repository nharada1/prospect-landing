import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section
      title="What Can I Do?"
      description="With Prospect you can do a variety of time-intensive tasks on aerial imagery quickly and cheaply. Offload your busy work to us, and get back to your real job."
      yPadding="py-12"
    >
      <VerticalFeatureRow
        title="Count & Outline"
        description="We'll generate high quality per-object masks for whatever you're looking for. Works best for objects that are distinct and well-defined."
        image="/assets/images/birds_objects.png"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Find Rare Objects"
        description="If you have only a few examples of what you're looking for, we'll find them all. Most useful for needle in a haystack style searches."
        image="/assets/images/rare_objects.png"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="Calculations & Reports"
        description="Get per-image information like object counts, sizes, coverage and more. Import into Excel, or get back JSON."
        image="/assets/images/json.png"
        imageAlt="Third feature alt text"
        reverse
      />
    </Section>

    <Section
      title="How Does It Work?"
      description="We'll process your images and return the results within 24 hours. Prospect uses state of the art AI and computer vision to complete your task at superhuman speed. For now we have a human in the loop to make sure we get it right."
      yPadding="py-12"
    >
      <VerticalFeatureRow
        title="Upload Your Images"
        description="We support both individual images (png, jpg, etc) and orthomosaic tilesets in GeoTIFF format."
        image="/assets/images/overhead_pacifica.png"
        imageAlt="Pricing illustration"
      />
      <VerticalFeatureRow
        title="Request Your Analysis"
        description="Upload your images and provide us some details about what you're looking for."
        image="/assets/images/upload.jpeg"
        imageAlt="Analysis illustration"
        reverse
      />
      <VerticalFeatureRow
        title="Pay As You Go"
        description="Pay for what you need. No minimum commitment, no subscription required."
        image="/assets/images/pricing.png"
        imageAlt="Volume pricing illustration"
      />
    </Section>
  </>
);

export { VerticalFeatures };
