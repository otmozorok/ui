import { AvatarComponent } from '@wc/components';
import { WCTAG } from '@wc/shared';
import App from './App.svelte';
import '../../../demo/style.css';

customElements.define(WCTAG.Avatar, AvatarComponent);

const app = new App({
  target: document.getElementById('app')!,
});

export default app;
