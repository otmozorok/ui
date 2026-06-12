import { fn } from "storybook/test";
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

  if(args.show) {
    el.addEventListener("show", () => args.show())
  }

  if(args.hide) {
    el.addEventListener("hide", () => args.hide())
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
    show: {
      table: {
        category: 'events',
      },
    },
    hide: {
      table: {
        category: 'events',
      },
    },
  },
  args: {
    show: fn(),
    hide: fn(),
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
