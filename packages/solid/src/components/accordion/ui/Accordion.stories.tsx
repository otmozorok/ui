import { Headline } from '../../headline';
import { Paragraph } from '../../paragraph';
import { Accordion } from './Accordion';
import type { IAccordionProps } from '../model';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = ParentComponent<IAccordionProps & { title?: string }>;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultAccordion: Story = {
  args: {
    title: 'Заголовок',
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    return (
      <Accordion {...props}>
        <Headline slot="header">{props.title}</Headline>
        <Paragraph>{props.children}</Paragraph>
      </Accordion>
    );
  },
};
