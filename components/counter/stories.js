import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr, toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Counter',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Counter);

    setAttr(args[WCATTR.Value], WCATTR.Value, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Rounded], WCATTR.Rounded, el);
    toggleAttr(args[WCATTR.Inverse], WCATTR.Inverse, el);

    return el;
  },
  argTypes: {
    [WCATTR.Value]: {
      control: { type: 'number' },
      type: { name: 'number' },
    },
    [WCATTR.Rounded]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Inverse]: {
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
    [WCATTR.Value]: 10000,
    [WCATTR.Rounded]: false,
    [WCATTR.Inverse]: false,
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
};
