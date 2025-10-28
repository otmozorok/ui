import { WCTAG } from '../../../consts/index.js';
import { AccordionComponent } from './accordion.js';

function renderDefault(args) {
  const el = document.createElement(WCTAG.Accordion);

  if (args.header) {
    const headline = document.createElement(WCTAG.Headline);
    headline.slot = 'header';
    headline.innerHTML = args.header;
    el.appendChild(headline);
  }

  if (args.children) {
    const paragraph = document.createElement(WCTAG.Paragraph);
    paragraph.innerHTML = args.children;
    el.appendChild(paragraph);
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
      table: {
        category: 'other',
      },
    },
    header: {
      control: { type: 'text' },
      type: { name: 'string' },
      table: {
        category: 'other',
      },
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
