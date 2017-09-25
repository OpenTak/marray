import { describe, it } from 'mocha';
import { expect } from 'chai';

import Marray from '../source/marray';

describe('Marray', () => {
  describe('#two', () => {
    it('generates a 2d array', () => {
      expect(Marray.two(2,2)).to.deep.equal([
        [undefined, undefined],
        [undefined, undefined]
      ]);
    });

    it('generates with a function', () => {
      expect(Marray.two(3, 3, () => [])).to.deep.equal([
        [[], [], []],
        [[], [], []],
        [[], [], []]
      ]);
    });

    it('generates with indexes', () => {
      expect(
        Marray.two(3, 3, (x, y) => `${x}, ${y}`)
      ).to.deep.equal([
        ['0, 0', '0, 1', '0, 2'],
        ['1, 0', '1, 1', '1, 2'],
        ['2, 0', '2, 1', '2, 2']
      ]);
    });
  });
});
