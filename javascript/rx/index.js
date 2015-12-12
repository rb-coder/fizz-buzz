'use strict';

const Rx = require('rx');

let multi = (value, divisor) => !(value % divisor);
let multi3 = (value) => multi(value, 3);
let multi5 = (value) => multi(value, 5);

let FizzBuzz = (input) => {
    let observableInput = Rx.Observable.just(input);
    let result = '';
    let consume = (value) => result += value;

    Rx.Observable.merge(
        observableInput
            .filter((val) => !multi3(val) && !multi5(val)),
        observableInput
            .filter((val) => multi3(val))
            .map((val) => 'Fizz'),
        observableInput
            .filter((val) => multi5(val))
            .map((val) => 'Buzz')
    ).subscribe((val) => consume(val));

    return result;
}

module.exports = FizzBuzz;
