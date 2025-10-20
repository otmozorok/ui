<script lang="ts">
  import { AccordionComponent, IconComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IAccordionProps } from '../model';
  import { Headline } from '../../headline';

  customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
  customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

  const { children, title, ...props }: IAccordionProps = $props();
</script>

<wc-accordion {...props}>
  <Headline slot="header">{title}</Headline>
  {@render children?.()}
</wc-accordion>
