<script lang="ts">
  import { ButtonComponent, WCTAG } from '@otmozorok/wc';
  import type { Snippet } from 'svelte';

  customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);

  interface Props {
    size?: 'small' | 'medium' | 'large';
    onclick?: () => void;
    children: Snippet;
  }

  const { children, ...props }: Props = $props();
</script>

<wc-button {...props}>
  {@render children?.()}
</wc-button>
