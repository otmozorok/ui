import { ALIGNITEM, SIZE, SIZES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

export default {
  title: 'Components/Loader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Loader);

    setAttr(args[WCATTR.Size], WCATTR.Size, el);

    return el;
  },
  argTypes: {
    [WCATTR.Size]: {
      control: { type: 'inline-radio' },
      options: SIZES,
      table: {
        defaultValue: { summary: SIZE.Medium },
        category: 'props',
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/txHhP4RIa7u0D9jsSAyjw3/UI?node-id=2-35&embed-host=share',
    },
  },
};

export const DefaultLoader = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
  },
};

export const AllLoaders = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
  },
  render: () => {
    const flex = document.createElement(WCTAG.Flex);
    const el1 = document.createElement(WCTAG.Loader);
    const el2 = document.createElement(WCTAG.Loader);
    const el3 = document.createElement(WCTAG.Loader);

    setAttr(SIZE.Small, WCATTR.Size, el1);
    setAttr(SIZE.Medium, WCATTR.Size, el2);
    setAttr(SIZE.Large, WCATTR.Size, el3);

    setAttr(ALIGNITEM.Center, WCATTR.AlignItems, flex);
    setAttr(0.5, WCATTR.Gap, flex);

    flex.appendChild(el1);
    flex.appendChild(el2);
    flex.appendChild(el3);

    return flex;
  },
};
