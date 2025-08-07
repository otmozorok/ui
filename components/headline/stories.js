import { SIZE, SIZES, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

export default {
  title: 'Typography/Headline',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Headline);

    setAttr(args[WCATTR.Size], WCATTR.Size, el);

    if (args.children) {
      el.innerText = args.children;
    }

    return el;
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
    [WCATTR.Size]: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: SIZES,
      table: {
        defaultValue: { summary: SIZE.Medium },
      },
    },
  },
  args: {
    children: 'Title text',
    [WCATTR.Size]: SIZE.Medium,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/txHhP4RIa7u0D9jsSAyjw3/UI?node-id=51-16&embed-host=share',
    },
  },
};

export const DefaultHeadline = {
  args: {
    children: 'Title text',
    [WCATTR.Size]: SIZE.Medium,
  },
};
