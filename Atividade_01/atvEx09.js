function calc (x, y) {
    const add = (x, y) => x + y;
    const mult = (x, y) => x * y;

    return {add, mult};
}

const op = calc();

console.log(op.add(2,5));
console.log(op.mult(2,5));

