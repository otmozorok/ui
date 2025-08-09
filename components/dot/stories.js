import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Dot',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Dot);

    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

    return el;
  },
  argTypes: {
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
      url: 'https://embed.figma.com/design/txHhP4RIa7u0D9jsSAyjw3/UI?node-id=6-11&embed-host=share',
    },
  },
};

export const DefaultDot = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
};
