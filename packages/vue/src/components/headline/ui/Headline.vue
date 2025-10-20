<template>
  <wc-headline :size="$props.size" :appearance="$props.appearance" :caps="$props.caps || undefined">
    <slot></slot>
  </wc-headline>
</template>

<script lang="ts" setup>
import { HeadlineComponent } from '@otmozorok/wc';
import { SIZE, WCATTR, WCTAG } from '@otmozorok/wc/consts';
import { IHeadlineProps } from '../model';

customElements.get(WCTAG.Headline) || customElements.define(WCTAG.Headline, HeadlineComponent);

withDefaults(defineProps<IHeadlineProps>(), {
  [WCATTR.Size]: SIZE.Medium,
});
</script>
