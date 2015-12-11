/** @jsx CycleDOM.hJSX */
import Rx from 'rx';
import Cycle from '@cycle/core';
import CycleDOM from '@cycle/dom';

const fizzBuzz = ({DOM}) => {
  const intent = (DOM) => {
    return {
          changeValue$: DOM.select('input.input')
                .events('keyup')
                .distinctUntilChanged()
                .debounce(100)
                .map((ev) => ev.target.value)
                .map((val) => { return { val, num: parseInt(val, 10)}})
    };
  }

  const model = (actions) => Rx.Observable.merge(
    actions.changeValue$
      .filter(({val, num}) => isNaN(num))
      .map(({val, num}) => { return {val, msg: 'Invalid', special: false}})
      .startWith({val: null, num: null, special: false}),
    actions.changeValue$
      .map(({val, num}) => { return {val, msg: num, special:false}}),
    actions.changeValue$
      .filter(({val, num}) => num % 3 === 0)
      .map(({val, num}) => { return {val, msg: 'Fizz', special:true}}),
    actions.changeValue$
      .filter(({val, num}) => num % 5 === 0)
      .map(({val, num}) => { return {val, msg: 'Buzz', special:true}}))
    .bufferWithTime(10)
    .filter((s) => s.length > 0 )
    .map((s) => s.reduce((acc, curr) => {
        if (acc.special && curr.special) {
            acc.msg += curr.msg
            return acc;
        }
        return curr;
    }))

  const view = (state$) => state$.map(({num, msg}) => {
      return (
        <div>
          	<input type="text" className="input" value={num} placeholder="EnterNumber"/>
      		<div>{msg}</div>
      	</div>
    )
  })

  return {
    DOM: view(model(intent(DOM)))
  };
}

export default fizzBuzz;
