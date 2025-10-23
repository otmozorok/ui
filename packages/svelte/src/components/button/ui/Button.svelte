<script lang="ts">
  import { ButtonComponent, LoaderComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IButtonProps } from '../model';

  customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);
  customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

  const { children, onclick, appearance, mode, size, loading, fullWidth, ...rest }: IButtonProps =
    $props();
</script>

<!-- svelte-ignore event_directive_deprecated -->
<wc-button
  {appearance}
  {mode}
  {size}
  loading={loading || undefined}
  full-width={fullWidth || undefined}
  on:click={onclick}
  {...rest}
>
  {@render children?.()}
</wc-button>
