<template>
  <wc-paragraph :appearance="$props.appearance" :caps="$props.caps || undefined">
    <slot></slot>
  </wc-paragraph>
</template>

<script lang="ts" setup>
import { ParagraphComponent } from '@otmozorok/wc';
import { APPEARANCE, WCTAG } from '@otmozorok/wc/consts';
import { IParagraphProps } from '../model';

customElements.get(WCTAG.Paragraph) || customElements.define(WCTAG.Paragraph, ParagraphComponent);

withDefaults(defineProps<IParagraphProps>(), {
  appearance: APPEARANCE.Themed,
});
</script>
