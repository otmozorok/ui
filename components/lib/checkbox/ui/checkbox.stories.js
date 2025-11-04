import { fn } from 'storybook/test';
import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

export default {
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Checkbox);

    toggleAttr(args[WCATTR.Checked], WCATTR.Checked, el);
    toggleAttr(args[WCATTR.Indeterminate], WCATTR.Indeterminate, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

    if (args.label) {
      const label = document.createElement(WCTAG.Span);

      label.innerText = args.label;
      el.appendChild(label);
    }

    if (args.description) {
      const description = document.createElement(WCTAG.Span);

      setAttr(APPEARANCE.Neutral, WCATTR.Appearance, description);

      description.innerText = args.description;
      description.slot = 'description';
      el.appendChild(description);
    }

    el.addEventListener('change', ({ detail }) => args.onChange(detail));

    return el;
  },
  argTypes: {
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
        category: 'props',
      },
    },
    [WCATTR.Checked]: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
        category: 'props',
      },
    },
    [WCATTR.Indeterminate]: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'props',
      },
    },
  },
  args: {
    onChange: fn(),
  },
};

export const DefaultCheckbox = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Checked]: false,
    label: 'Текст для чекбокса',
  },
};

export const CheckboxWithDescription = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Checked]: false,
    label: 'Текст для чекбокса',
    description: 'Описание для чекбокса',
  },
};

export const CheckboxWithDescriptionInContainer = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Checked]: false,
    label: 'Текст для чекбокса',
    description: 'Описание для чекбокса',
  },
  render: (args) => {
    const container = document.createElement(WCTAG.Container);
    const el = document.createElement(WCTAG.Checkbox);

    toggleAttr(args[WCATTR.Checked], WCATTR.Checked, el);
    toggleAttr(args[WCATTR.Indeterminate], WCATTR.Indeterminate, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

    if (args.label) {
      const label = document.createElement(WCTAG.Span);

      label.innerText = args.label;
      el.appendChild(label);
    }

    if (args.description) {
      const description = document.createElement(WCTAG.Span);

      setAttr(APPEARANCE.Neutral, WCATTR.Appearance, description);

      description.innerText = args.description;
      description.slot = 'description';
      el.appendChild(description);
    }

    el.addEventListener('change', ({ detail }) => args.onChange(detail));

    container.island = true;
    container.filled = true;
    container.fullWidth = true;

    container.appendChild(el);

    return container;
  },
};

export const CheckboxWithOutText = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Checked]: false,
  },
};
