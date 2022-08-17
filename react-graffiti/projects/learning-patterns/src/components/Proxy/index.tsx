import React, { useState } from 'react';
import { personProxy } from './Person';

export default function Proxy() {
    const [value, setValue] = useState('');
    const [person, setPerson] = useState(personProxy);
    return (
        <div>
            {person.name}
            <br />
            {person.age}
            <br />
            {person.nationality}
            <br />
            input change name
            <input onChange={(e) => setValue(e.target.value)} value={value}></input>
            <button
                onClick={() => {
                    personProxy.name = value;
                    setPerson(personProxy);
                }}
            >
                submit
            </button>
        </div>
    );
}
