import { previewMain, WCTAG } from '../consts/index.js';
import {
  AccordionComponent,
  ArticleComponent,
  AvatarComponent,
  BannerComponent,
  ButtonComponent,
  ContainerComponent,
  CounterComponent,
  DotComponent,
  DropdownComponent,
  EllipsisComponent,
  FlexComponent,
  GridComponent,
  HeadlineComponent,
  IconComponent,
  InputComponent,
  LoaderComponent,
  MenuActionComponent,
  MenuComponent,
  MenuHeaderComponent,
  MenuItemComponent,
  ParagraphComponent,
  SpanComponent,
} from '../index.js';
import '../style.css';
import './style.css';

customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.define(WCTAG.Article, ArticleComponent);
customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.define(WCTAG.Banner, BannerComponent);
customElements.define(WCTAG.Button, ButtonComponent);
customElements.define(WCTAG.Container, ContainerComponent);
customElements.define(WCTAG.Counter, CounterComponent);
customElements.define(WCTAG.Dot, DotComponent);
customElements.define(WCTAG.Dropdown, DropdownComponent);
customElements.define(WCTAG.Ellipsis, EllipsisComponent);
customElements.define(WCTAG.Flex, FlexComponent);
customElements.define(WCTAG.Grid, GridComponent);
customElements.define(WCTAG.Headline, HeadlineComponent);
customElements.define(WCTAG.Icon, IconComponent);
customElements.define(WCTAG.Input, InputComponent);
customElements.define(WCTAG.Loader, LoaderComponent);
customElements.define(WCTAG.Menu, MenuComponent);
customElements.define(WCTAG.MenuAction, MenuActionComponent);
customElements.define(WCTAG.MenuHeader, MenuHeaderComponent);
customElements.define(WCTAG.MenuItem, MenuItemComponent);
customElements.define(WCTAG.Paragraph, ParagraphComponent);
customElements.define(WCTAG.Span, SpanComponent);

/** @type { import('@storybook/html').Preview } */
const preview = {
  ...previewMain,
};

export default preview;
