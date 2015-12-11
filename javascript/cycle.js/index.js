/** @jsx CycleDOM.hJSX */
import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';
import fizzBuzz from './components/fizzBuzz';

const main = fizzBuzz

Cycle.run(main, {
  DOM: CycleDOM.makeDOMDriver('#fizzBuzzApplication')
});
