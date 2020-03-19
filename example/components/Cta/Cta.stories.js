import React from 'react';

import Cta from './Cta.component';

/**
 * Storybook Definition.
 */
export default {
  component: Cta,
  title: 'CTA',
};

export const example = () => (
  <Cta
    heading="This is a Call to Action"
    content="Click here"
  />
);
