import {
  APPEARANCE,
  APPEARANCES,
  MODE,
  MODES,
  SIZE,
  SIZES,
  WCATTR,
  WCTAG,
} from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: `Текст кнопки`,
    },
    [WCATTR.Loading]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.FullWidth]: {
      control: {
        type: 'boolean',
      },
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
    [WCATTR.Mode]: {
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
    [WCATTR.Loading]: false,
    [WCATTR.FullWidth]: false,
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Size]: SIZE.Medium,
    [WCATTR.Mode]: MODE.Primary,
  },
};

export const DefaultButton = {
  render: (args) => {
    const el = document.createElement(WCTAG.Button);

    setAttr(args[WCATTR.Size], WCATTR.Size, el);
    setAttr(args[WCATTR.Mode], WCATTR.Mode, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Loading], WCATTR.Loading, el);
    toggleAttr(args[WCATTR.FullWidth], WCATTR.FullWidth, el);

    el.innerText = args.children;

    return el;
  },
};

export const ButtonWithCounter = {
  render: (args) => {
    const el = document.createElement(WCTAG.Button);
    const counter = document.createElement(WCTAG.Counter);

    counter.slot = 'after';

    setAttr(args[WCATTR.Size], WCATTR.Size, el);
    setAttr(args[WCATTR.Mode], WCATTR.Mode, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Loading], WCATTR.Loading, el);
    toggleAttr(args[WCATTR.FullWidth], WCATTR.FullWidth, el);

    toggleAttr(true, WCATTR.Inverse, counter);
    toggleAttr(true, WCATTR.Rounded, counter);
    setAttr(1200, WCATTR.Value, counter);

    el.innerText = args.children;
    el.appendChild(counter);

    return el;
  },
};
