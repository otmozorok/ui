<script lang="ts">
  import { ParagraphComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IParagraphProps } from '../model';

  customElements.get(WCTAG.Paragraph) || customElements.define(WCTAG.Paragraph, ParagraphComponent);

  const { children, appearance, caps, ...props }: IParagraphProps = $props();
</script>

<wc-paragraph {appearance} caps={caps || undefined} {...props}>
  {@render children?.()}
</wc-paragraph>
