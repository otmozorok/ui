import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { Dot } from './Dot';
import type { IDotProps } from '../model';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Dot',
  component: Dot,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
      },
    },
  },
} satisfies Meta<IDotProps>;

type Story = StoryObj<IDotProps>;

export const DefaultDot: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
  render: ({ ...props }) => {
    return <Dot {...props}></Dot>;
  },
};

export default meta;
