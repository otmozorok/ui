<template>
  <wc-button
    :appearance="$props.appearance"
    :size="$props.size"
    :mode="$props.mode"
    :loading="$props.loading || undefined"
    :full-width="$props.fullWidth || undefined"
  >
    <slot></slot>
  </wc-button>
</template>

<script lang="ts" setup>
import { ButtonComponent, LoaderComponent } from '@otmozorok/wc';
import { APPEARANCE, MODE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);
customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

withDefaults(defineProps<IButtonProps>(), {
  mode: MODE.Primary,
  appearance: APPEARANCE.Themed,
  size: SIZE.Medium,
});
</script>
