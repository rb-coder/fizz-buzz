import FizzBuzz from '../src/FizzBuzz';

describe('FizzBuzz', () => {
    let game = new FizzBuzz();

    it('returns 1 for 1', () => {
        expect(game.for(1)).toBe('1');
    });

    it('returns 2 for 2', () => {
        expect(game.for(2)).toBe('2');
    });

    it('returns Fizz for 3', () => {
        expect(game.for(3)).toBe('Fizz');
    });

    it('returns 4 for 4', () => {
        expect(game.for(4)).toBe('4');
    });

    it('returns Buzz for 5', () => {
        expect(game.for(5)).toBe('Buzz');
    });

    it('returns Fizz for 6', () => {
        expect(game.for(6)).toBe('Fizz');
    });

    it('returns FizzBuzz for 15', () => {
        expect(game.for(15)).toBe('FizzBuzz');
    });
});
