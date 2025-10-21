<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Accordion } from '.';
  import { type IAccordionProps } from '../model';
  import { Headline } from '../../headline';

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

{#snippet template({ children, title, ...args }: IAccordionProps)}
  <Accordion {...args}>
    <Headline slot="header">{title}</Headline>
    {children}
  </Accordion>
{/snippet}

<Story
  name="Primary"
  args={{
    title: 'Заголовок',
    // @ts-ignore
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  }}
></Story>
