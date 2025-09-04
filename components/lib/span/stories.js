import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../../consts/index.js';
import { setAttr, toggleAttr } from '../../utils/index.js';

export default {
  title: 'Typography/Span',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Span);

    toggleAttr(args[WCATTR.Caps], WCATTR.Caps, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

    if (args.children) {
      el.innerText = args.children;
    }

    return el;
  },
  argTypes: {
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
    [WCATTR.Caps]: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
  },
};

export const DefaultSpan = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};
