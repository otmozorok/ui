import { WCTAG } from '../../../consts/index.js';

function render() {
  return () => {
    const el = document.createElement(WCTAG.Backdrop);

    return el;
  };
}

export default {
  title: 'Components/Backdrop',
  tags: ['autodocs'],
  render: render(),
  argTypes: {},
  args: {},
};

export const DefaultBackdrop = {
  args: {},
};
