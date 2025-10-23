<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Button } from '.';
  import { fn } from 'storybook/test';
  import { APPEARANCE, APPEARANCES, MODE, MODES, SIZE, SIZES, WCATTR } from '@otmozorok/wc/consts';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      [WCATTR.Size]: {
        control: { type: 'inline-radio' },
        options: SIZES,
        table: {
          defaultValue: { summary: SIZE.Medium },
        },
      },
      [WCATTR.Appearance]: {
        control: { type: 'inline-radio' },
        options: APPEARANCES,
        table: {
          defaultValue: { summary: APPEARANCE.Themed },
        },
      },
      [WCATTR.Mode]: {
        control: { type: 'inline-radio' },
        options: MODES,
        table: {
          defaultValue: { summary: MODE.Primary },
        },
      },
      [WCATTR.Loading]: {
        control: { type: 'boolean' },
      },
      fullWidth: {
        control: { type: 'boolean' },
      },
      children: {
        control: { type: 'text' },
      },
    },
    args: {
      onclick: fn(),
    },
  });
</script>

<Story
  name="DefaultButton"
  args={{
    children: 'Нажимать на меня',
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Mode]: MODE.Primary,
    [WCATTR.Size]: SIZE.Medium,
  }}
>
  {#snippet template(args)}
    <Button {...args}>
      {args.children}
    </Button>
  {/snippet}
</Story>
