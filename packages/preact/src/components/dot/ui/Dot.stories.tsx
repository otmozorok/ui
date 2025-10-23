import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { IDotProps } from '../model';
import { Dot } from './Dot';
import type { Meta, StoryObj } from '@storybook/preact-vite';

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
