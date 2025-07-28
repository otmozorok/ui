import { MODE, MODES, SIZE, SIZES, WCTAG } from '../.shared';
import { setAttr, toggleAttr } from '../.storybook/utils';

/**
 * Кнопка
 */
export default {
  title: 'Компоненты/Button',
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
    },
    mode: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: MODES,
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

export const ButtonWithCounter = {
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
