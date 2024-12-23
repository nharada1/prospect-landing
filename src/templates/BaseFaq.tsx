import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { FaqFeatures } from './FaqFeatures';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

const BaseFaq = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Background color="bg-gray-100">
      <Navbar />
    </Background>
    <FaqFeatures />
    <Footer showCopyright={true} />
  </div>
);

export { BaseFaq };
