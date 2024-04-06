import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title='No need to "Contact Sales". Reasonable and upfront pricing.'
      pricing={[
        { option: 'Each New Scene', price: '$15' },
        { option: 'Small images (Under 1000px sq)', price: '$0.10 each' },
        { option: 'Large images (Over 1000px sq)', price: '$0.25 each' },
      ]}
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
