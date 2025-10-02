import { WCTAG } from '../../consts/index.js';

function renderDefault(args) {
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
}

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  render: renderDefault,
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/txHhP4RIa7u0D9jsSAyjw3/UI?node-id=44-13&embed-host=share',
    },
  },
};

export const DefaultAccordion = {
  args: {
    children: 'Lorem ipsun',
    header: 'Header',
  },
};
