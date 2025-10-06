import type { Meta, StoryObj } from '@storybook/preact-vite';
import { IAccordionProps } from '../model';
import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<IAccordionProps>;

type Story = StoryObj<IAccordionProps>;

export const DefaultAccordion: Story = {
  args: {
    title: 'Заголовок',
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ children, ...props }) => {
    return <Accordion {...props}>{children}</Accordion>;
  },
};

export default meta;
