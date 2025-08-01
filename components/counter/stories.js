import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../.shared';
import { setAttr, toggleAttr } from '../.storybook/utils';

export default {
  title: 'Components/Counter',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Counter);

    setAttr(args.value, WCATTR.Value, el);
    setAttr(args.appearance, WCATTR.Appearance, el);
    toggleAttr(args.rounded, WCATTR.Rounded, el);
    toggleAttr(args.inverse, WCATTR.Inverse, el);

    return el;
  },
  argTypes: {
    value: {
      control: { type: 'number' },
      type: { name: 'number' },
    },
    rounded: {
      control: {
        type: 'boolean',
      },
    },
    inverse: {
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
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/txHhP4RIa7u0D9jsSAyjw3/UI?node-id=5-49&embed-host=share',
    },
  },
};

export const DefaultCounter = {
  args: {
    value: 10000,
    rounded: false,
    inverse: false,
    appearance: APPEARANCE.Themed,
  },
};
