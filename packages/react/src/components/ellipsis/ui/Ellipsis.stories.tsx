import { Ellipsis } from './Ellipsis';
import type { IEllipsisProps } from '../model';
import type { Meta, StoryObj } from '@storybook/react-vite';

type IMeta = IEllipsisProps & { text?: string };

const meta = {
  title: 'Typography/Ellipsis',
  component: Ellipsis,
  tags: ['autodocs'],
  argTypes: {
    maxLines: { control: { type: 'number', min: 1, max: 3 } },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const Primary: Story = {
  args: {
    maxLines: 1,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю.',
  },
  render: ({ text, ...props }) => {
    return <Ellipsis {...props}>{text}</Ellipsis>;
  },
};

export default meta;
