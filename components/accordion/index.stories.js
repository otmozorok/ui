import { WCTAG } from '../.shared';

export default {
  title: 'Компоненты/Accordion',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Accordion);

    if (args.children) {
      el.innerHTML = args.children;
    }

    if (args.header) {
      const header = document.createElement(WCTAG.Headline);
      header.slot = 'header';
      header.innerHTML = args.header;
      el.appendChild(header);
    }

    return el;
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
    header: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
  },
  args: {
    children: 'Lorem ipsun',
    header: 'Header',
  },
};

export const Primary = {
  args: {
    children: 'Lorem ipsun',
    header: 'Header',
  },
};
