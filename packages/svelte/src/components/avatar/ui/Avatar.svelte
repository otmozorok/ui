<script lang="ts">
  import { AvatarComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IAvatarProps } from '../model';

  customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);

  const { children, ...props }: IAvatarProps = $props();
</script>

<wc-avatar {...props}>
  {@render children?.()}
</wc-avatar>
