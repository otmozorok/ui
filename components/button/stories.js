import { APPEARANCE, APPEARANCES, MODE, MODES, SIZE, SIZES, WCATTR, WCTAG } from '../.shared';
import { setAttr, toggleAttr } from '../.storybook/utils';

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
    appearance: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
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
    appearance: APPEARANCE.Themed,
    size: SIZE.Medium,
    mode: MODE.Primary,
  },
};

export const DefaultButton = {
  render: (args) => {
    const el = document.createElement(WCTAG.Button);

    setAttr(args.size, WCATTR.Size, el);
    setAttr(args.mode, WCATTR.Mode, el);
    setAttr(args.appearance, WCATTR.Appearance, el);
    toggleAttr(args.loading, WCATTR.Loading, el);
    toggleAttr(args.fullwidth, WCATTR.FullWidth, el);

    el.innerText = args.children;

    return el;
  },
};

export const ButtonWithCounter = {
  render: (args) => {
    const el = document.createElement(WCTAG.Button);
    const counter = document.createElement(WCTAG.Counter);
    counter.slot = 'after';

    toggleAttr(true, WCATTR.Inverse, counter);
    toggleAttr(true, WCATTR.Rounded, counter);
    setAttr(1000, WCATTR.Value, counter);

    el.innerText = args.children;

    el.appendChild(counter);

    return el;
  },
};
