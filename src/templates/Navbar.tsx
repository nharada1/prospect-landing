import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  <Section yPadding="py-6">
    <NavbarTwoColumns logo={<Logo xl />}>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
      <li>
        <a href="mailto:hello@moonshinelabs.ai">Contact Us</a>
      </li>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
