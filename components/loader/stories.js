import { SIZE, SIZES, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Loader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Loader);

    setAttr(args.size, WCATTR.Size, el);

    return el;
  },
  argTypes: {
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
    size: SIZE.Medium,
  },
};
