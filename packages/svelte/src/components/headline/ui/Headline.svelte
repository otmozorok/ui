<script lang="ts">
  import { HeadlineComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IHeadlineProps } from '../model';

  customElements.get(WCTAG.Headline) || customElements.define(WCTAG.Headline, HeadlineComponent);

  const { children, appearance, size, caps, ...props }: IHeadlineProps = $props();
</script>

<wc-headline {appearance} {size} caps={caps || undefined} {...props}>
  {@render children?.()}
</wc-headline>
