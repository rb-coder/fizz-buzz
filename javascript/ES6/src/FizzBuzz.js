
class Filter {
    constructor(next) {
        this.next = next;
    }

    filter(input, output) {
        output = this.handle(input, output);
        if (this.next) {
            output = this.next.filter(input, output);
        }
        return output;
    }

    handle(input, output) { throw new Error('Implement method!')}
}

class Fizz extends Filter {
    handle(input, output) {
        if (input % 3 === 0) {
            output += 'Fizz';
        }
        return output;
    }
}

class Buzz extends Filter {
    handle(input, output) {
        if (input % 5 === 0) {
            output += 'Buzz';
        }
        return output;
    }
}

class Other extends Filter {
    handle(input, output) {
        if (output.length === 0) {
            output += input;
        }
        return output;
    }
}

class FizzBuzz {
    for(input) {
        return new Fizz(new Buzz(new Other())).filter(input, '');
    }
}

export default FizzBuzz;
