let counter = 0;
let instance: Counter;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can't create more than one instance of Counter");
        }
        instance = this.getInstance();
    }
    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
