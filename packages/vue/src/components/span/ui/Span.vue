<template>
  <wc-span :appearance="$props.appearance" :caps="$props.caps || undefined">
    <slot></slot>
  </wc-span>
</template>

<script lang="ts" setup>
import { SpanComponent } from '@otmozorok/wc';
import { APPEARANCE, WCTAG } from '@otmozorok/wc/consts';
import { ISpanProps } from '../model';

customElements.get(WCTAG.Span) || customElements.define(WCTAG.Span, SpanComponent);

withDefaults(defineProps<ISpanProps>(), {
  appearance: APPEARANCE.Themed,
});
</script>
