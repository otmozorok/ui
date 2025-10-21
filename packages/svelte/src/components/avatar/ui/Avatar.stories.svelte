<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Avatar } from '.';
  import {
    APPEARANCE,
    COLOR,
    COLORS,
    MODE,
    SHAPE,
    SHAPES,
    SIZE,
    WCATTR,
  } from '@otmozorok/wc/consts';

  const { Story } = defineMeta({
    title: 'Components/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
      [WCATTR.Color]: {
        control: { type: 'inline-radio' },
        options: COLORS,
        table: {
          defaultValue: { summary: COLOR.Blue },
        },
      },
      [WCATTR.Shape]: {
        control: { type: 'inline-radio' },
        options: SHAPES,
        table: {
          defaultValue: { summary: SHAPE.Circle },
        },
      },
      sizeNumber: {
        control: { type: 'number' },
        table: {
          defaultValue: { summary: '3' },
        },
      },
      children: {
        control: { type: 'text' },
      },
    },
  });
</script>

<Story
  name="DefaultAvatar"
  args={{
    children: 'BH',
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
    sizeNumber: 3,
  }}
>
  {#snippet template(args)}
    <Avatar {...args}>
      {args.children}
    </Avatar>
  {/snippet}
</Story>

<Story
  name="WithImage"
  args={{
    children: 'BH',
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
    sizeNumber: 3,
  }}
>
  {#snippet template(args)}
    <Avatar {...args}>
      <img src="https://avatars.githubusercontent.com/u/15306476?v=4" alt="Avatar" />
    </Avatar>
  {/snippet}
</Story>

<Story
  name="WithText"
  args={{
    children: 'BH',
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Circle,
    sizeNumber: 3,
  }}
>
  {#snippet template(args)}
    <Avatar {...args}>
      {args.children}
    </Avatar>
  {/snippet}
</Story>

<Story
  name="BigAndSquircle"
  args={{
    children: 'BH',
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Squircle,
    sizeNumber: 5,
  }}
>
  {#snippet template(args)}
    <Avatar {...args}>
      {args.children}
    </Avatar>
  {/snippet}
</Story>
