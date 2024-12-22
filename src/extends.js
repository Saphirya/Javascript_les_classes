class ExtendedArray extends Array {
  random() {
    const length = this.length;
    let i = 0;
    while (i < length) {
      this[i] = Math.round(Math.random() * 10);
      i++;
    }
  }
}
const arr = new ExtendedArray(1, 2, 3);
arr.random();
console.log(arr);
