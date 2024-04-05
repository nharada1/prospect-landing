import type { ReactNode } from 'react';

type PricingOption = {
  option: string;
  price: string;
};

type ICTABannerProps = {
  title: string;
  pricing: PricingOption[];
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="mb-16 flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-2xl">
      <div className="pb-4 font-semibold text-gray-900">{props.title}</div>
      <div className="text-gray-500">
        <ul className="text-gray-900">
          {props.pricing.map((item, index) => (
            <li key={index} className="flex items-center justify-start">
              <span className="mr-2">{item.option}:</span>
              <span className="text-primary-500">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
