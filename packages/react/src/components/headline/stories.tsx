import type { Meta, StoryObj } from '@storybook/react-vite';
import { Headline, type IHeadlineProps } from '.';
import { SIZE, SIZES } from '@otmozorok/wc';

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: SIZES,
      table: { defaultValue: { summary: SIZE.Medium } },
    },
    children: { control: 'text' },
  },
} satisfies Meta<IHeadlineProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHeadline: Story = {
  args: {
    size: SIZE.Medium,
    children: 'Заголовок',
  },
  render: ({ ...props }) => {
    return <Headline {...props} />;
  },
};
