<script module>
  // @ts-nocheck
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
  import { fn } from 'storybook/test';
  import { SIZES } from '@otmozorok/wc';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'inline-radio' },
        options: SIZES,
      },
    },
    args: {
      onclick: fn(),
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ primary: true }}>Button</Story>

<Story name="Secondary" args={{}}>Button</Story>

<Story name="Large" args={{ size: 'large' }}>Button</Story>

<Story name="Small" args={{ size: 'small' }}>Button</Story>
