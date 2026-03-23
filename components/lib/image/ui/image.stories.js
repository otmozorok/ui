import img from '../../../../assets/image.jfif';
import { WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

function render() {
  return (args) => {
    const el = document.createElement(WCTAG.Image);

    setAttr(args[WCATTR.Width], WCATTR.Width, el);
    setAttr(args[WCATTR.Height], WCATTR.Height, el);
    setAttr(args[WCATTR.BorderRadius], WCATTR.BorderRadius, el);
    setAttr(args[WCATTR.Src], WCATTR.Src, el);

    return el;
  };
}

export default {
  title: 'Components/Image',
  tags: ['autodocs'],
  render: render(),
  argTypes: {
    [WCATTR.Width]: { control: { type: 'number' }, table: { category: 'props' } },
    [WCATTR.Height]: { control: { type: 'number' }, table: { category: 'props' } },
    [WCATTR.BorderRadius]: { control: { type: 'number' }, table: { category: 'props' } },
    [WCATTR.Src]: { control: { type: 'text' }, table: { category: 'props' } },
  },
  args: {},
};

export const DefaultImage = {
  args: {
    [WCATTR.Width]: 16,
    [WCATTR.Height]: 10,
    [WCATTR.BorderRadius]: 0.5,
    [WCATTR.Src]: img,
  },
};
