import { Headline } from '../../headline';
import { Paragraph } from '../../paragraph';
import { Accordion } from './Accordion';
import type { IAccordionProps } from '../model';
import type { Meta, StoryObj } from '@storybook/react-vite';

type IMeta = IAccordionProps & { text?: string };

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
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
