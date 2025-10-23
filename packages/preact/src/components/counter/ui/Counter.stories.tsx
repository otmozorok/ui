import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { ICounterProps } from '../model';
import { Counter } from './Counter';
import type { Meta, StoryObj } from '@storybook/preact-vite';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Value]: {
      control: { type: 'number' },
    },
    [WCATTR.Rounded]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Inverse]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
      },
    },
  },
} satisfies Meta<ICounterProps>;

type Story = StoryObj<ICounterProps>;

export const DefaultCounter: Story = {
  args: {
    [WCATTR.Value]: 10000,
    [WCATTR.Rounded]: false,
    [WCATTR.Inverse]: false,
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
  render: ({ ...props }) => {
    return <Counter {...props}></Counter>;
  },
};

export default meta;
