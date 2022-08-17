const person: { [index: string]: string | number | string } = {
    name: 'John',
    age: 30,
    nationality: 'American'
};

export const personProxy = new Proxy(person, {
    get: (obj, prop: string) => {
        return `The value of ${String(prop)} is ${obj[prop]}`;
    },
    set: (obj, prop: string, value) => {
        obj[prop] = value;
        return true;
    }
});
