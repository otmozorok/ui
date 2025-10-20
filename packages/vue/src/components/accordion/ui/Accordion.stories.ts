import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Accordion } from '.';
import { Headline } from '../../headline';

const meta = {
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
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

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
