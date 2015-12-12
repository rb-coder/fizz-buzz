'use strict';
const fizzBuzz = require('./index');

describe('FizzBuzz', () => {
    it('returns 1 for 1', () => {
		expect(fizzBuzz(1)).toBe('1');
	});

    it('returns 2 for 2', () => {
		expect(fizzBuzz(2)).toBe('2');
	});

    it('returns Fizz for 3', () => {
		expect(fizzBuzz(3)).toBe('Fizz');
	});

    it('returns 4 for 4', () => {
		expect(fizzBuzz(4)).toBe('4');
	});

    it('returns Buzz for 5', () => {
		expect(fizzBuzz(5)).toBe('Buzz');
	});

    it('returns Fizz for 6', () => {
		expect(fizzBuzz(6)).toBe('Fizz');
	});

    it('returns FizzBuzz for 15', () => {
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});
});
