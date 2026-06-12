import { WCTAG } from '../../../consts/index.js';

function render() {
  return (args) => {
    const el = document.createElement(WCTAG.{{componentName}});

    return el;
  };
}

export default {
  title: 'Components/{{componentName}}',
  tags: ['autodocs'],
  render: render(),
  argTypes: {},
  args: {},
};

export const Default{{componentName}} = {
  args: {},
};