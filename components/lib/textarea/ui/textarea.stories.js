import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

export default {
  title: 'Form/Textarea',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
      description: `Текст кнопки`,
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
  },
  args: {
    children: 'Text button',
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Size]: SIZE.Medium,
  },
};

export const DefaultTextarea = {
  render: (args) => {
    const el = document.createElement(WCTAG.Textarea);

    setAttr(args[WCATTR.Size], WCATTR.Size, el);
    setAttr(args[WCATTR.Mode], WCATTR.Mode, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Loading], WCATTR.Loading, el);
    toggleAttr(args[WCATTR.FullWidth], WCATTR.FullWidth, el);

    el.innerText = args.children;

    return el;
  },
};
