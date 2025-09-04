import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR, WCTAG } from '../../consts/index.js';
import { setAttr, toggleAttr } from '../../utils/index.js';

export default {
  title: 'Typography/Headline',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Headline);

    toggleAttr(args[WCATTR.Caps], WCATTR.Caps, el);
    setAttr(args[WCATTR.Size], WCATTR.Size, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

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
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
      },
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
    [WCATTR.Caps]: {
      control: {
        type: 'boolean',
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
