import React from 'react';
import Counter from './Counter';

export default function Singleton() {
    const [curCount, setCurCount] = React.useState(Counter.getCount());
    const onIncrement = () => {
        Counter.increment();
        setCurCount(Counter.getCount());
    };
    const onDecrement = () => {
        Counter.decrement();
        setCurCount(Counter.getCount());
    };
    return (
        <div>
            <button onClick={onDecrement}>-</button>
            {curCount}
            <button onClick={onIncrement}>+</button>
        </div>
    );
}
