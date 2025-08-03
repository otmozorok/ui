import {
  AccordionComponent,
  AvatarComponent,
  ButtonComponent,
  CounterComponent,
  DropdownComponent,
  EllipsisComponent,
  HeadlineComponent,
  IconComponent,
  LoaderComponent,
  MenuActionComponent,
  MenuComponent,
  MenuHeaderComponent,
  MenuItemComponent,
  ParagraphComponent,
} from '../';
import { WCTAG } from '../.shared';
import '../style.css';
import './style.css';

customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.define(WCTAG.Button, ButtonComponent);
customElements.define(WCTAG.Counter, CounterComponent);
customElements.define(WCTAG.Dropdown, DropdownComponent);
customElements.define(WCTAG.Ellipsis, EllipsisComponent);
customElements.define(WCTAG.Headline, HeadlineComponent);
customElements.define(WCTAG.Icon, IconComponent);
customElements.define(WCTAG.Loader, LoaderComponent);
customElements.define(WCTAG.Menu, MenuComponent);
customElements.define(WCTAG.MenuAction, MenuActionComponent);
customElements.define(WCTAG.MenuHeader, MenuHeaderComponent);
customElements.define(WCTAG.MenuItem, MenuItemComponent);
customElements.define(WCTAG.Paragraph, ParagraphComponent);

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  decorators: [
    (story, { globals }) => {
      document.documentElement.classList.remove(...['light', 'dark']);
      document.documentElement.classList.add(globals.theme);

      return story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  initialGlobals: {
    theme: 'dark',
  },
  globalTypes: {
    theme: {
      toolbar: {
        dynamicTitle: true,
        icon: 'sun',
        items: ['light', 'dark'],
      },
    },
  },
};

export default preview;
