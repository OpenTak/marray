export default {
  two(x = 1, y = 1, genFn) {
    let newArray = [];

    for (let i = 0; i < x; i++) {
      let subArray = [];

      for (let j = 0; j < y; j++) {
        subArray.push(genFn ? genFn(i, j) : undefined);
      }

      newArray.push(subArray);
    }

    return newArray;
  }
};
