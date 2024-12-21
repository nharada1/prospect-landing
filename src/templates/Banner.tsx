import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Save the tedious work, try Prospect today."
      subtitle="Your first scene is free!"
      button={
        <Link href="https://forms.gle/GpvkgSvpwbZa7drs5">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
