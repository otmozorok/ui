<script lang="ts">
  import { COLOR } from '@wc/shared';

  export let src: string | undefined = undefined;
  export let size: number | undefined = undefined;
  export let color: COLOR | undefined = undefined;
</script>

<wc-avatar {src} {size} {color}>
  <slot></slot>
</wc-avatar>
