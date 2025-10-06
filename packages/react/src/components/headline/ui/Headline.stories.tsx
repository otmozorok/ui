import type { Meta, StoryObj } from '@storybook/react-vite';
import { Headline } from './Headline';
import { APPEARANCE, APPEARANCES, SIZE, SIZES } from '@otmozorok/wc/consts';
import type { IHeadlineProps } from '../model';

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    appearance: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: { defaultValue: { summary: APPEARANCE.Themed } },
    },
    size: {
      control: 'inline-radio',
      options: SIZES,
      table: { defaultValue: { summary: SIZE.Medium } },
    },
    caps: {
      control: 'boolean',
    },
  },
} satisfies Meta<IHeadlineProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultHeadline: Story = {
  args: {
    children: 'Заголовок',
    appearance: APPEARANCE.Themed,
    size: SIZE.Medium,
  },
  render: ({ ...props }) => {
    return <Headline {...props} />;
  },
};
