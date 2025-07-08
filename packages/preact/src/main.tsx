import { render } from 'preact';
import { App } from './app.tsx';
import '../../../demo/style.css';
import { WCTAG } from '@wc/shared';
import {
  AvatarComponent,
  ButtonComponent,
  CounterComponent,
  LoaderComponent,
} from '@wc/components';

customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.define(WCTAG.Button, ButtonComponent);
customElements.define(WCTAG.Counter, CounterComponent);
customElements.define(WCTAG.Loader, LoaderComponent);

render(<App />, document.getElementById('app')!);
