import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
import type { IAccordionProps } from '../model';

type IMeta = IAccordionProps & { text?: string };

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<IMeta>;

export default meta;
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
