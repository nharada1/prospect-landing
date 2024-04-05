import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Only pay if you're happy with the results."
      pricing={[
        { option: 'New Projects', price: '$10' },
        { option: 'Small images', price: '$0.10 each' },
        { option: 'Large images', price: '$0.25 each' },
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
