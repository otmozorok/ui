import { ALIGNITEMS, DIRECTION, DIRECTIONS, WCATTR } from '@otmozorok/wc/consts';
import { Button } from '../../button';
import { Flex } from './Flex';
import type { IFlexProps } from '../model';
import type { Meta, StoryObj } from '@storybook/react-vite';

type IMeta = IFlexProps;

const meta = {
  title: 'Layouts/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Direction]: {
      control: { type: 'inline-radio' },
      options: DIRECTIONS,
      table: {
        defaultValue: {
          summary: DIRECTION.Horizontal,
        },
      },
    },
    alignItems: {
      control: { type: 'inline-radio' },
      options: ALIGNITEMS,
    },
    [WCATTR.Gap]: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultFlex: Story = {
  args: {
    [WCATTR.Direction]: DIRECTION.Horizontal,
  },
  render: ({ ...props }) => {
    return (
      <Flex {...props}>
        {[1, 2, 3].map((key) => (
          <div key={key} className="skeleton"></div>
        ))}
        <Button>Button</Button>
      </Flex>
    );
  },
};

export default meta;
