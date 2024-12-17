import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroHeader';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const ReactRotatingText = require('react-rotating-text');

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/moonshinelabs-ai">GitHub</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

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
        description="Fast and accurate analysis of aerial images. Upfront pricing, and your first scene is free."
        button={
          <Link href="https://app.moonshinelabs.ai/signup">
            <Button xl>Try For Free</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
