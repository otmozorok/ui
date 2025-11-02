import { Ellipsis } from './Ellipsis';
import type { IEllipsisProps } from '../model';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = ParentComponent<IEllipsisProps>;

const meta = {
  title: 'Typography/Ellipsis',
  component: Ellipsis,
  tags: ['autodocs'],
  argTypes: {
    maxLines: { control: { type: 'number', min: 1, max: 3 } },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultEllipsis: Story = {
  args: {
    maxLines: 1,
    children:
      'Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю.',
  },
  render: (props) => {
    return <Ellipsis {...props}>{props.children}</Ellipsis>;
  },
};

export default meta;
