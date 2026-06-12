import { SIZE_BOTTOM_SHEET, SIZES_BOTTOM_SHEET, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

function render() {
  return (args) => {
    const el = document.createElement(WCTAG.BottomSheet);
    const p = document.createElement(WCTAG.Paragraph);

    setAttr(args[WCATTR.Open], WCATTR.Open, el);
    setAttr(args[WCATTR.Size], WCATTR.Size, el);

    p.innerText = 'Съешь ещё этих мягких французских булок, да выпей чаю';

    for (let i = 0; i < 15; i++) {
      el.append(p.cloneNode(true));
    }

    return el;
  };
}

export default {
  title: 'Components/BottomSheet',
  tags: ['autodocs'],
  render: render(),
  argTypes: {
    [WCATTR.Open]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Size]: {
      control: {
        type: 'inline-radio',
      },
      options: SIZES_BOTTOM_SHEET,
    },
  },
  args: {},
};

export const DefaultBottomSheet = {
  args: {
    [WCATTR.Open]: false,
    [WCATTR.Size]: SIZE_BOTTOM_SHEET.Full,
  },
};
