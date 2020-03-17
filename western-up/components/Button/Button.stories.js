import React from 'react';
import Button from './Button.component';

export const Text = () => <Button>Hello Button</Button>;

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
