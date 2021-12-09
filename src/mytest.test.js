function sum(a, b) {
    return a + b;
}



const mysum = require(sum())

test('hihi', () => {
    expect(sum(1, 2)).toBe(3);
})