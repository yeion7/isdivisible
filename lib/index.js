import { curry } from 'ramda';

const isDivisible = curry((x, y) => x % y === 0);

export default isDivisible;
