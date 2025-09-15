import type { Meta, StoryObj } from '@storybook/react-vite';
import { SIZE, SIZES } from '@otmozorok/wc/.shared';
import { Headline } from '.';

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
} satisfies Meta<typeof Headline>;

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
