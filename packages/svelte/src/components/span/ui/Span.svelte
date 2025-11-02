<script lang="ts">
  import { SpanComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { ISpanProps } from '../model';

  customElements.get(WCTAG.Span) || customElements.define(WCTAG.Span, SpanComponent);

  const { children, appearance, caps, ...props }: ISpanProps = $props();
</script>

<wc-span {appearance} caps={caps || undefined} {...props}>
  {@render children?.()}
</wc-span>
