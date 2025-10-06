import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
import type { IAccordionProps } from '../model';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<IAccordionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAccordion: Story = {
  args: {
    title: 'Заголовок',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  render: ({ children, ...props }) => {
    return <Accordion {...props}>{children}</Accordion>;
  },
};
