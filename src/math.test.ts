import { expect, test } from 'vitest';
import { add, multiply } from './math.js';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
});
