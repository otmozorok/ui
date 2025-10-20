<template>
  <wc-button v-bind:props><slot></slot></wc-button>
</template>

<script lang="ts" setup>
import { ButtonComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);

const props = withDefaults(defineProps<IButtonProps>(), {});
</script>
