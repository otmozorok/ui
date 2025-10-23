import { Headline } from '../../headline';
import { Paragraph } from '../../paragraph';
import { IAccordionProps } from '../model';
import { Accordion } from './Accordion';
import type { Meta, StoryObj } from '@storybook/preact-vite';

type IMeta = IAccordionProps & { text?: string };

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultAccordion: Story = {
  args: {
    title: 'Заголовок',
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ text, title, ...props }) => {
    return (
      <Accordion {...props}>
        <Headline slot="header">{title}</Headline>
        <Paragraph>{text}</Paragraph>
      </Accordion>
    );
  },
};

export default meta;
