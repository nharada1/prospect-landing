import type { ReactNode } from 'react';

type FaqRowProps = {
  question: string;
  answer: ReactNode;
};

const FaqRow = (props: FaqRowProps) => {
  return (
    <div className="mt-8 w-full">
      <h3 className="text-xl font-semibold text-gray-900">{props.question}</h3>
      <div className="mt-3 text-lg leading-7 text-gray-600">{props.answer}</div>
    </div>
  );
};

export { FaqRow };
