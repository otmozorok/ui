import { WCTAG } from '../../../consts/index.js';

function render() {
  return (args) => {
    const el = document.createElement(WCTAG.Glitch);

    if (args.children) {
      el.innerText = args.children;
    }

    return el;
  };
}

export default {
  title: 'Effects/Glitch',
  tags: ['autodocs'],
  render: render(),
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        category: 'other',
      },
    },
  },
  args: {},
};

export const DefaultGlitch = {
  args: {
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
};
