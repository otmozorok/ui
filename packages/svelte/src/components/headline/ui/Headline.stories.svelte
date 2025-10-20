<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Headline } from '.';
  import { type IHeadlineProps } from '../model';

  const { Story } = defineMeta({
    title: 'Typography/Headline',
    component: Headline,
    tags: ['autodocs'],
    argTypes: {
      children: {
        control: 'text',
      },
      caps: {
        control: 'boolean',
      },
    },
    render: template,
  });
</script>

{#snippet template({ children, caps, ...args }: IHeadlineProps)}
  <Headline caps={caps || undefined} {...args}>{children}</Headline>
{/snippet}

<Story
  name="Primary"
  args={{
    // @ts-ignore
    children: 'Заголовок',
  }}
></Story>
