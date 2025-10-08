import type { Meta, StoryObj } from '@storybook/preact-vite';
import { IAccordionProps } from '../model';
import { Accordion } from './Accordion';

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
  render: ({ text, ...props }) => {
    return <Accordion {...props}>{text}</Accordion>;
  },
};

export default meta;
