import { FaqRow } from '../feature/FaqRow';
import { Section } from '../layout/Section';

const FaqFeatures = () => (
  <Section
    title="Frequently Asked Questions"
    description="Can't find the answer you're looking for? Please contact us."
    yPadding="py-12"
  >
    <FaqRow
      question="How long does processing take?"
      answer="Most jobs are completed within 24 hours. Processing time depends on image size, complexity of the detection task, and current queue length. Paid jobs are priorizied over free trials, and rush processing is available for time-sensitive projects."
    />
    <FaqRow
      question="Is there an API available?"
      answer="Not yet, if this is something that would be useful to you please let us know!"
    />
    <FaqRow
      question="Can you help collect imagery?"
      answer="We can purchase satellite/aerial imagery through our partners, or help you collect drone imagery. Please contact us for more information."
    />
    <FaqRow
      question="Will you open up your software so I can use it myself?"
      answer="We'd like to develop a platform for you to use yourself, we're working on it!"
    />
    <FaqRow
      question="Are there tasks you can't do?"
      answer="Sometimes, yes. As a general guideline, if you could quickly train a human to do the task we can probably do it. If it requires specialized knowledge or a lot of domain-specific training, it may be difficult."
    />
    <FaqRow
      question="What if the task is too difficult?"
      answer="If the task is too difficult, we will let you know. We will not take on tasks that we cannot reasonably complete, and we won't charge you for them."
    />
    <FaqRow
      question="What payment methods do you accept?"
      answer="We accept all major credit cards and can arrange invoicing for enterprise customers. Payment is processed securely through Stripe or PayPal."
    />
    <FaqRow
      question="Is my data secure?"
      answer="We take data security seriously. All uploads are securely stored and encrypted. We will not share your data with anyone without your explicit permission."
    />
  </Section>
);

export { FaqFeatures };
