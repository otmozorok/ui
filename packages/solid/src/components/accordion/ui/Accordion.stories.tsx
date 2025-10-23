import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Accordion } from './Accordion';
import type { IAccordionProps } from '../model';
import { Headline } from '../../headline';

type IMeta = IAccordionProps & { text?: string; title?: string };

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultAccordion: Story = {
  args: {
    title: 'Заголовок',
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    const { text, title } = props;
    return (
      <Accordion {...props}>
        <Headline slot="header">{title}</Headline>
        {text}
      </Accordion>
    );
  },
};
