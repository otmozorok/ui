import { render } from 'preact';
import { App } from './app.tsx';
import { AvatarComponent, ButtonComponent, CounterComponent, LoaderComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/.shared';
import '@otmozorok/wc/style.css';

customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.define(WCTAG.Button, ButtonComponent);
customElements.define(WCTAG.Counter, CounterComponent);
customElements.define(WCTAG.Loader, LoaderComponent);

render(<App />, document.getElementById('app')!);
