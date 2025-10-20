<script lang="ts">
  import { ButtonComponent } from '@otmozorok/wc';
  import { WCTAG } from '@otmozorok/wc/consts';
  import type { IButtonProps } from '../model';

  customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);

  const { children, ...props }: IButtonProps = $props();
</script>

<wc-button {...props}>
  {@render children?.()}
</wc-button>
