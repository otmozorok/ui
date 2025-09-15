import {
  AccordionComponent,
  IconComponent,
  AvatarComponent,
  HeadlineComponent,
} from './components/index.js';
import { WCTAG } from './components/.shared/consts/index.js';

declare global {
  interface HTMLElementTagNameMap {
    [WCTAG.Accordion]: AccordionComponent;
    [WCTAG.Avatar]: AvatarComponent;
    [WCTAG.Icon]: IconComponent;
    [WCTAG.Headline]: HeadlineComponent;
  }
}
