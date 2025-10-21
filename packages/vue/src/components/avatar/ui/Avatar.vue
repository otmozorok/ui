<template>
  <wc-avatar :color="$props.color" :shape="$props.shape" :size-number="$props.sizeNumber">
    <slot></slot>
  </wc-avatar>
</template>

<script lang="ts" setup>
import { AvatarComponent, IconComponent } from '@otmozorok/wc';
import { COLOR, SHAPE, WCTAG } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

withDefaults(defineProps<IAvatarProps>(), {
  color: COLOR.Blue,
  shape: SHAPE.Circle,
  sizeNumber: 3,
});
</script>
