import {  WCTAG } from '../consts/index.js';
import { previewMain } from '../consts/preview/index.js';
import {
  AccordionComponent,
  ArticleComponent,
  AvatarComponent,
  BackdropComponent,
  BannerComponent,
  BottomSheetComponent,
  ButtonComponent,
  CheckboxComponent,
  ContainerComponent,
  CounterComponent,
  DotComponent,
  DropdownComponent,
  EllipsisComponent,
  FlexComponent,
  GridComponent,
  HeadlineComponent,
  IconComponent,
  ImageComponent,
  InputComponent,
  LoaderComponent,
  MenuActionComponent,
  MenuComponent,
  MenuHeaderComponent,
  MenuItemComponent,
  ParagraphComponent,
  PopupComponent,
  RadioComponent,
  RippleComponent,
  SkeletonComponent,
  SpanComponent,
  SwitcherComponent,
  TextareaComponent,
} from '../index.js';
import { define } from '../utils/index.js';
import '../style.css';
import './style.css';

define(WCTAG.Accordion, AccordionComponent);
define(WCTAG.Article, ArticleComponent);
define(WCTAG.Avatar, AvatarComponent);
define(WCTAG.Backdrop, BackdropComponent);
define(WCTAG.Banner, BannerComponent);
define(WCTAG.BottomSheet, BottomSheetComponent);
define(WCTAG.Button, ButtonComponent);
define(WCTAG.Checkbox, CheckboxComponent);
define(WCTAG.Checkbox, CheckboxComponent);
define(WCTAG.Container, ContainerComponent);
define(WCTAG.Counter, CounterComponent);
define(WCTAG.Dot, DotComponent);
define(WCTAG.Dropdown, DropdownComponent);
define(WCTAG.Ellipsis, EllipsisComponent);
define(WCTAG.Flex, FlexComponent);
define(WCTAG.Grid, GridComponent);
define(WCTAG.Headline, HeadlineComponent);
define(WCTAG.Icon, IconComponent);
define(WCTAG.Image, ImageComponent);
define(WCTAG.Input, InputComponent);
define(WCTAG.Loader, LoaderComponent);
define(WCTAG.Menu, MenuComponent);
define(WCTAG.MenuAction, MenuActionComponent);
define(WCTAG.MenuHeader, MenuHeaderComponent);
define(WCTAG.MenuItem, MenuItemComponent);
define(WCTAG.Paragraph, ParagraphComponent);
define(WCTAG.Popup, PopupComponent);
define(WCTAG.Radio, RadioComponent);
define(WCTAG.Ripple, RippleComponent);
define(WCTAG.Skeleton, SkeletonComponent);
define(WCTAG.Span, SpanComponent);
define(WCTAG.Switcher, SwitcherComponent);
define(WCTAG.Textarea, TextareaComponent);

/** @type { import('@storybook/html').Preview } */
const preview = {
  ...previewMain,
};

export default preview;
