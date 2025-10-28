import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

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
      table: {
        category: 'other',
      },
    },
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
        category: 'props',
      },
    },
    [WCATTR.Size]: {
      control: { type: 'inline-radio' },
      options: SIZES,
      table: {
        defaultValue: { summary: SIZE.Medium },
        category: 'props',
      },
    },
    [WCATTR.Caps]: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'props',
      },
    },
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
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
    [WCATTR.Size]: SIZE.Medium,
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
};
