import { Headline } from '../../headline';
import { Accordion } from '.';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

type IMeta = typeof Accordion;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: {
        type: 'text',
      },
    },
    default: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultAccordion: Story = {
  args: {
    header: 'Заголовок',
    default: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (args) => ({
    components: { Accordion, Headline },
    setup() {
      return { args };
    },
    template: `
      <Accordion v-bind="args">
        <Headline slot="header" v-html="args.header"></Headline>
        <span v-html="args.default"></span>
      </Accordion>
    `,
  }),
};
