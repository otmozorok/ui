[Docs](https://otmozorok.github.io/ui/)

# Установка

```shell
npm i @pappahapa/wc
```

## Как использовать

```js
import { AvatarComponent } from '@pappahapa/wc';
import '@pappahapa/style.css';

customElements.define('wc-avatar', AvatarComponent);

document.querySelector('#app').innerHTML = `
    <wc-avatar>BH</wc-avatar>
`;
```
