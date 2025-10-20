<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Accordion } from '.';
  import { type IAccordionProps } from '../model';

  const { Story } = defineMeta({
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: 'text',
      },
      children: {
        control: 'text',
      },
    },
    render: template,
  });
</script>

{#snippet template({ children, ...args }: IAccordionProps)}
  <Accordion {...args}>{children}</Accordion>
{/snippet}

<Story
  name="Primary"
  args={{
    title: 'Заголовок',
    // @ts-ignore
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }}
></Story>
