import {
  AccordionComponent,
  ArticleComponent,
  AvatarComponent,
  ButtonComponent,
  CounterComponent,
  DotComponent,
  DropdownComponent,
  EllipsisComponent,
  FlexComponent,
  GridComponent,
  HeadlineComponent,
  IconComponent,
  LoaderComponent,
  MenuActionComponent,
  MenuComponent,
  MenuHeaderComponent,
  MenuItemComponent,
  ParagraphComponent,
} from '../index.js';
import { WCTAG } from '../consts/index.js';
import '../style.css';
import './style.css';

customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.define(WCTAG.Article, ArticleComponent);
customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.define(WCTAG.Button, ButtonComponent);
customElements.define(WCTAG.Counter, CounterComponent);
customElements.define(WCTAG.Dot, DotComponent);
customElements.define(WCTAG.Dropdown, DropdownComponent);
customElements.define(WCTAG.Ellipsis, EllipsisComponent);
customElements.define(WCTAG.Flex, FlexComponent);
customElements.define(WCTAG.Grid, GridComponent);
customElements.define(WCTAG.Headline, HeadlineComponent);
customElements.define(WCTAG.Icon, IconComponent);
customElements.define(WCTAG.Loader, LoaderComponent);
customElements.define(WCTAG.Menu, MenuComponent);
customElements.define(WCTAG.MenuAction, MenuActionComponent);
customElements.define(WCTAG.MenuHeader, MenuHeaderComponent);
customElements.define(WCTAG.MenuItem, MenuItemComponent);
customElements.define(WCTAG.Paragraph, ParagraphComponent);

const items = ['light', 'dark'];

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators: [
    (story, { globals }) => {
      document.documentElement.classList.remove(...items);
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
    theme: items[1],
  },
  globalTypes: {
    theme: {
      toolbar: {
        dynamicTitle: true,
        icon: 'sun',
        items,
      },
    },
  },
};

export default preview;
