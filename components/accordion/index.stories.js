import { COLOR, COLORS, WCTAG } from '@pappahapa/shared';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Компоненты/Accordion',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Accordion);

    if (args.children) {
      el.innerHTML = args.children;
    }

    return el;
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
  },
  args: {
    children: 'Lorem ipsun ',
  },
};

export const WithImage = {
  name: 'С изображением',
  args: {
    src: 'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    size: 48,
  },
};

export const WithOutImage = {
  name: 'Без изображения',
  args: {
    src: '',
    children: 'BH',
    size: 48,
    color: COLOR.Blue,
  },
};

export const Big = {
  name: 'Большой размер',
  args: {
    src: '',
    children: 'BH',
    size: 65,
    color: COLOR.Blue,
  },
};
