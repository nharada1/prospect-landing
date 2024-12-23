import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroHeader';
import { Section } from '../layout/Section';

const ReactRotatingText = require('react-rotating-text');

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-2">
      <HeroOneButton
        title={
          <>
            {'The best way to quickly \n'}
            <span className="text-primary-500">
              <ReactRotatingText
                items={[
                  'count my cattle.',
                  'find an endangered species.',
                  'estimate crop coverage.',
                  'narrow down my search and rescue area.',
                  'survey a wildlife population.',
                ]}
              />
            </span>
          </>
        }
        description="Fast and accurate analysis of your aerial imagery. Upfront pricing, and your first scene is free."
        button={
          <Link href="https://forms.gle/GpvkgSvpwbZa7drs5">
            <Button xl>Try For Free</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
