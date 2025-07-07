import { expect } from '@esm-bundle/chai';
import { rounded } from '../../shared/index.js';

describe('Функция rounded', () => {
  it('Должна форматировать малое число без изменений', () => {
    expect(rounded(123)).to.equal('123');
  });

  it('Должна преобразовать тысячи в "K"', () => {
    expect(rounded(1000)).to.equal('1K');
    expect(rounded(1234)).to.equal('1.2K');
  });

  it('Должна преобразовать миллионы в "M"', () => {
    expect(rounded(1_000_000)).to.equal('1M');
    expect(rounded(2_500_000)).to.equal('2.5M');
  });

  it('Должна корректно обрабатывать дробные числа', () => {
    expect(rounded(9876.54321)).to.equal('9.9K');
  });
});
