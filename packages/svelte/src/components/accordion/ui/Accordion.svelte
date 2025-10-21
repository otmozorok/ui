<script lang="ts">
  import { AccordionComponent, IconComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IAccordionProps } from '../model';

  customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
  customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

  const { children, ...props }: IAccordionProps = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<wc-accordion {...props}>
  <slot name="header"></slot>
  <slot></slot>
</wc-accordion>
