import { test } from 'tape';
import { __ } from 'ramda';
import isDivisible from '../build/index.js';

test('A passing test', (assert) => {
  assert.pass('This test will pass.');
  assert.end();
});

test('Assertions with tape.', (assert) => {
  assert.equal(isDivisible(3, 3), true,
    'Recibe different value');

  assert.same(isDivisible(4, 3), false,
    'Recibe different value');

  assert.same(isDivisible(24, 2), true,
    'Recibe different value');

  const isDivisibleBy3 = isDivisible(__, 3);

  assert.same(isDivisibleBy3(9), true,
    'Recibe different value');

  assert.end();
});
