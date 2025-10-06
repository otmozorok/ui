import type { Meta, StoryObj } from '@storybook/preact-vite';
import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR } from '@otmozorok/wc/consts';
import { IHeadlineProps } from '../model';
import { Headline } from './Headline';

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Caps]: { control: 'boolean' },
    [WCATTR.Appearance]: { control: 'inline-radio', options: APPEARANCES },
    [WCATTR.Size]: {
      control: 'inline-radio',
      options: SIZES,
    },
  },
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Size]: SIZE.Medium,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
} satisfies Meta<IHeadlineProps>;

type Story = StoryObj<IHeadlineProps>;

export const Primary: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Size]: SIZE.Medium,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ children, ...props }) => {
    return <Headline {...props}>{children}</Headline>;
  },
};

export default meta;
