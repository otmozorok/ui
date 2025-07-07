import { expect } from '@esm-bundle/chai';
import { COLOR, COLORS } from '../shared/index.js';
import { AvatarComponent } from '../components/avatar/index.js';
import '../components/index.js';

describe('Avatar Component', () => {
  /**
   * @type {AvatarComponent}
   */
  let avatar;

  beforeEach(async () => {
    avatar = document.createElement('wc-avatar');
    document.body.appendChild(avatar);
    await new Promise(requestAnimationFrame);
  });

  afterEach(() => {
    document.body.removeChild(avatar);
  });

  it('Должен отображать изображение при наличии атрибута src', async () => {
    avatar.setAttribute('src', 'test.jpg');
    const img = avatar.shadowRoot.querySelector('img');
    const bg = avatar.shadowRoot.querySelector('.bg');

    console.log(img);

    expect(img).to.exist;
    expect(bg).to.not.exist;
    expect(img.src).to.include('test.jpg');
  });

  it('Должен отображать цветной фон при отсутствии src', async () => {
    const bg = avatar.shadowRoot.querySelector('.bg');
    const img = avatar.shadowRoot.querySelector('img');

    expect(bg).to.exist;
    expect(img).to.not.exist;
  });

  it('Должен применять цвет фона при установке атрибута color', async () => {
    avatar.setAttribute('color', COLOR.Red);
    const bg = avatar.shadowRoot.querySelector('.bg');

    expect(bg.classList.contains(COLOR.Red)).to.be.true;
    expect([...COLORS].every((c) => c !== COLOR.Red && !bg.classList.contains(c))).to.be.true;
  });

  it('Должен устанавливать размеры при изменении атрибута size', async () => {
    avatar.setAttribute('size', '64');
    const wrapper = avatar.shadowRoot.querySelector('.wrapper');

    expect(wrapper.style.width).to.equal('64px');
    expect(wrapper.style.height).to.equal('64px');
  });
});
