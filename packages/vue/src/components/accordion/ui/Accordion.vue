<template>
  <wc-accordion>
    <slot name="header"></slot>
    <slot></slot>
  </wc-accordion>
</template>

<script lang="ts" setup>
import { AccordionComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { IAccordionProps } from '../model';

customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

defineProps<IAccordionProps>();
</script>
