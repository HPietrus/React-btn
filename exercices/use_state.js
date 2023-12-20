import React, { useState } from "react";
export default function Counter() {

    const [count, setCount] = useState(0)

    const btnIncrementer = () => {
        setCount(count + 1)

    }

    const btnDecrementer = () => {
        setCount(count - 1)
    }

    const btnInitialiser = () => {
        setCount(0)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>{count}</h3>
            <button onClick={btnIncrementer}>Incrementer</button>
            <button onClick={btnInitialiser}>Initialiser</button>
            <button onClick={btnDecrementer}>Decrementer</button>
        </div>
    )
}

