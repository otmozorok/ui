import { WCTAG } from '../.shared';
import {
  AccordionComponent,
  AvatarComponent,
  ButtonComponent,
  CounterComponent,
  EllipsisComponent,
  HeadlineComponent,
  IconComponent,
  LoaderComponent,
} from '@pappahapa/wc';
import '../style.css';
import './style.css';

customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.define(WCTAG.Button, ButtonComponent);
customElements.define(WCTAG.Counter, CounterComponent);
customElements.define(WCTAG.Ellipsis, EllipsisComponent);
customElements.define(WCTAG.Headline, HeadlineComponent);
customElements.define(WCTAG.Icon, IconComponent);
customElements.define(WCTAG.Loader, LoaderComponent);

/** @type { import('@storybook/web-components-vite').Preview } */
const preview = {
  decorators: [
    (story, { globals }) => {
      document.documentElement.classList.remove(...['light', 'dark', 'ios', 'android']);
      document.documentElement.classList.add(globals.theme);
      document.documentElement.classList.add(globals.platform);

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
    theme: 'light',
    platform: 'ios',
    withMaxUiWrapper: true,
  },
  globalTypes: {
    theme: {
      toolbar: {
        dynamicTitle: true,
        icon: 'sun',
        items: ['light', 'dark'],
      },
    },
    platform: {
      toolbar: {
        dynamicTitle: true,
        icon: 'mobile',
        items: ['ios', 'android'],
      },
    },
  },
};

export default preview;
