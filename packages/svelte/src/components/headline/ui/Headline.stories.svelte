<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { APPEARANCE, APPEARANCES, SIZE, SIZES } from '@otmozorok/wc/consts';
  import { Headline } from '.';
  import type { IHeadlineProps } from '../model';
  import type { Snippet } from 'svelte';

  const { Story } = defineMeta({
    title: 'Typography/Headline',
    component: Headline,
    tags: ['autodocs'],
    argTypes: {
      caps: {
        control: 'boolean',
      },
      appearance: {
        control: 'inline-radio',
        options: APPEARANCES,
        table: {
          defaultValue: {
            summary: APPEARANCE.Themed,
          },
        },
      },
      size: {
        control: 'inline-radio',
        options: SIZES,
        table: {
          defaultValue: {
            summary: SIZE.Medium,
          },
        },
      },
    },
    render: template,
  });
</script>

{#snippet template({ children, appearance, size, caps }: IHeadlineProps)}
  <Headline {appearance} {size} {caps}>{children}</Headline>
{/snippet}

<Story
  name="DefaultHeadline"
  args={{
    size: SIZE.Medium,
    appearance: APPEARANCE.Themed,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю' as unknown as Snippet,
  }}
></Story>
