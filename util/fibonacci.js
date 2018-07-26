function* fibonacci() {
  let i = 1n, j = 1n, h;
  yield i;
  yield j;
  while (true) {
    h = i + j;
    i = j;
    j = h;
    yield h;
  }
}

module.exports = fibonacci;