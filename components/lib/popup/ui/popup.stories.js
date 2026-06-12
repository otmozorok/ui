import { fn } from 'storybook/test';
import { APPEARANCE, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

function render() {
  return (args) => {
    const el = document.createElement(WCTAG.Popup);

    if (args.children) {
      el.innerText = args.children;
    }

    if (args.header) {
      const header = document.createElement(WCTAG.Headline);

      header.slot = 'header';
      header.innerText = args.header;
      el.appendChild(header);
    }

    if (args.content) {
      const content = document.createElement(WCTAG.Paragraph);

      content.slot = "content";
      content.innerText = args.content;
      el.appendChild(content);
    }

    const footer = document.createElement(WCTAG.Grid);
    const button = document.createElement(WCTAG.Button);
    const ok = button.cloneNode();
    const close = button.cloneNode();

    ok.innerText = 'OK';
    close.innerText = 'Close';

    close.addEventListener('click', () => {
      el.close();
    });

    if (args.close) {
      el.addEventListener('close', () => {
        args.close();
      });
    }

    if (args.show) {
      el.addEventListener('show', () => {
        args.show();
      });
    }

    setAttr(APPEARANCE.Negative, WCATTR.Appearance, close);

    footer.append(...[ok, close]);
    footer.slot = 'footer';
    footer.gap = 1;
    footer.cols = 2;

    el.appendChild(footer);

    return el;
  };
}

/**
 * @type {import('@storybook/html').Meta}
 */
export default {
  title: 'Components/Popup',
  tags: ['autodocs'],
  render: render(),
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        category: 'other',
      },
    },
    content: {
      control: { type: 'text' },
      table: {
        category: 'other',
      },
    },
    header: {
      control: { type: 'text' },
      table: {
        category: 'other',
      },
    },
    close: {
      table: {
        category: 'events',
      },
    },
    show: {
      table: {
        category: 'events',
      },
    },
  },
  args: {
    close: fn(),
    show: fn(),
  },
};

export const DefaultPopup = {
  args: {
    children: 'Нажми на меня',
    header: 'Заголовок',
    content: 'Контент',
  },
};
