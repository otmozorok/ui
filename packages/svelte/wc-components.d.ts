import type { HeadlineComponent } from '@otmozorok/wc';
import { APPEARANCE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import type { HTMLBaseAttributes } from 'svelte/elements';
import type { IHeadlineProps } from './src/components/headline/model';
import type { IParagraphProps } from './src/components/paragraph/model';

declare global {
  interface HTMLElementTagNameMap {
    [WCTAG.Headline]: HeadlineComponent;
  }
}
declare global {
  namespace svelteHTML {
    interface IntrinsicElements {
      [WCTAG.Headline]: IHeadlineProps;
      [WCTAG.Paragraph]: IParagraphProps;
    }
  }
}
