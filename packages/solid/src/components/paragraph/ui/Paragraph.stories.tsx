import { APPEARANCE, APPEARANCES } from '@otmozorok/wc/consts';
import { Paragraph } from './Paragraph';
import type { IParagraphProps } from '../model';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = ParentComponent<IParagraphProps>;

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    caps: { control: 'boolean' },
    appearance: { control: 'inline-radio', options: APPEARANCES },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultParagraph: Story = {
  args: {
    appearance: APPEARANCE.Themed,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    return <Paragraph {...props}>{props.children}</Paragraph>;
  },
};
