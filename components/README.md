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
<p align="center" ><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWVnYW1manl4dDdld3RyN3F4NGpjMXhzOG84aWY5OXNkZTZvMjNuYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/ZDTbix65Me1YDNLDF3/giphy.gif" /></p>

<p align="right" >
  <a href="https://www.npmjs.com/package/@otmozorok/wc"><img src="https://img.shields.io/npm/v/@otmozorok/wc.svg?style=flat&label=%40otmozorok%2Fwc" /></a>
  <a href="https://github.com/otmozorok/ui/blob/main/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
</p>