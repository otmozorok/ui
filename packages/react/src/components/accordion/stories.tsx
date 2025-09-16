import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, type IAccordionProps } from '.';
import { Headline } from '../headline';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<IAccordionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAccordion: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  render: ({ ...props }) => {
    return (
      <Accordion {...props}>
        <Headline slot="header">Заголовок</Headline>
        {props.children}
      </Accordion>
    );
  },
};
