let assert = require("chai").assert;
describe("Shuffle Musicas", function () {
  it("Teste [2, 10, 5, 3]", function () {
    assert.deepEqual(shuffleMusicas([2, 10, 5, 3]), [10, 2, 5, 3]);
  });
});
