import { WCTAG } from '../../../consts/index.js';

function render() {
  return () => {
    const el = document.createElement(WCTAG.DotNavigation);

    return el;
  };
}

export default {
  title: 'Components/DotNavigation',
  tags: ['autodocs'],
  render: render(),
  argTypes: {},
  args: {},
};

export const DefaultDotNavigation = {
  args: {},
};