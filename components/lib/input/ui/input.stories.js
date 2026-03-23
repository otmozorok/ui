import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

export default {
  title: 'Form/Input',
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

export const DefaultInput = {
  render: (args) => {
    const el = document.createElement(WCTAG.Input);

    setAttr(args[WCATTR.Size], WCATTR.Size, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

    el.innerText = args.children;

    return el;
  },
};
