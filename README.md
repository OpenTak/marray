# Marray

Very quick multi-arrays:

```javascript
Marray.two(2,2) // => [
//   [undefined, undefined],
//   [undefined, undefined]
// ]

Marray.two(3, 3, () => []) // => [
//   [[], [], []],
//   [[], [], []],
//   [[], [], []]
// ]

Marray.two(3, 3, (x, y) => `${x}, ${y}`) // => [
//   ['0, 0', '0, 1', '0, 2'],
//   ['1, 0', '1, 1', '1, 2'],
//   ['2, 0', '2, 1', '2, 2']
// ]
```

The function for values gives back the x and y coordinates.

The entire point of this package is to make simple 2d arrays.
