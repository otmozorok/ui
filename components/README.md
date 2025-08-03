[Docs](https://otmozorok.github.io/ui/)

# Установка

```shell
npm i @otmozorok/wc
```

## Как использовать

```js
import { AvatarComponent } from '@otmozorok/wc';
import '@otmozorok/wc/style.css';

customElements.define('wc-avatar', AvatarComponent);

document.querySelector('#app').innerHTML = `
    <wc-avatar>BH</wc-avatar>
`;
```
