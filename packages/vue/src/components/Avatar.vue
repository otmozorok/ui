<script lang="ts">
import { WCTAG } from '@wc/shared';
import { AvatarComponent } from '@wc/components';

customElements.define(WCTAG.Avatar, AvatarComponent);
</script>
<script setup lang="ts">
import { COLOR } from '@wc/shared';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  src?: string;
  color?: COLOR;
  size?: number;
}>();

const emit = defineEmits<{
  (e: 'error'): void;
  (e: 'load'): void;
}>();

defineExpose({
  ...props,
  ...emit,
});
</script>

<template>
  <wc-avatar :src="src" :color="color" :size="size" @error="$emit('error')" @load="$emit('load')">
    <slot></slot>
  </wc-avatar>
</template>
