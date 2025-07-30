import { MODE, MODES, SIZE, SIZES, WCTAG } from '../.shared';
import { setAttr, toggleAttr } from '../.storybook/utils';

/**
 * Кнопка
 */
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: 'wc-button',
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: `Текст кнопки`,
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    fullwidth: {
      control: {
        type: 'boolean',
      },
    },
    destructive: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: SIZES,
      table: {
        defaultValue: { summary: SIZE.Medium },
      },
    },
    mode: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: MODES,
      table: {
        defaultValue: { summary: MODE.Primary },
      },
    },
  },
  args: {
    children: 'Text button',
    loading: false,
    fullwidth: false,
    destructive: false,
    size: SIZE.Medium,
    mode: MODE.Primary,
  },
};

export const DefaultButton = {
  render: (args) => {
    const el = document.createElement(WCTAG.Button);

    setAttr(args.size, 'size', el);
    setAttr(args.mode, 'mode', el);
    toggleAttr(args.loading, 'loading', el);
    toggleAttr(args.fullwidth, 'fullwidth', el);
    toggleAttr(args.destructive, 'destructive', el);

    el.innerText = args.children;

    return el;
  },
};

export const ButtonWithCounter = {
  render: (args) => {
    const el = document.createElement(WCTAG.Button);
    const counter = document.createElement(WCTAG.Counter);
    counter.slot = 'after';

    toggleAttr(true, 'inverse', counter);
    toggleAttr(true, 'rounded', counter);
    setAttr(1000, 'count', counter);

    setAttr(args.size, 'size', el);
    setAttr(args.mode, 'mode', el);
    toggleAttr(args.loading, 'loading', el);
    toggleAttr(args.fullwidth, 'fullwidth', el);
    toggleAttr(args.destructive, 'destructive', el);

    el.innerText = args.children;

    el.appendChild(counter);

    return el;
  },
};
