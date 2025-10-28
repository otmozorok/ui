<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { APPEARANCE, APPEARANCES } from '@otmozorok/wc/consts';
  import { Paragraph } from '.';
  import type { IParagraphProps } from '../model';
  import type { Snippet } from 'svelte';

  const { Story } = defineMeta({
    title: 'Typography/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    argTypes: {
      children: {
        control: 'text',
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
      caps: {
        control: 'boolean',
      },
    },
    render: template,
  });
</script>

{#snippet template({ children, caps, appearance }: IParagraphProps)}
  <Paragraph {appearance} {caps}>{children}</Paragraph>
{/snippet}

<Story
  name="DefaultParagraph"
  args={{
    appearance: APPEARANCE.Themed,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю' as unknown as Snippet,
  }}
></Story>
