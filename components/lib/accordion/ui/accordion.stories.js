import { WCTAG } from '../../../consts/index.js';
import { AccordionComponent } from './accordion.js';

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
  component: AccordionComponent,
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
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
    header: 'Заголовок',
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
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
    header: 'Заголовок',
  },
};
