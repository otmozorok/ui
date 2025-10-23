import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { Paragraph } from './Paragraph';
import type { IParagraphProps } from '../model';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = IParagraphProps & { text?: string };

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Caps]: { control: 'boolean' },
    [WCATTR.Appearance]: { control: 'inline-radio', options: APPEARANCES },
    text: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultParagraph: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    const { text } = props;
    return <Paragraph {...props}>{text}</Paragraph>;
  },
};
