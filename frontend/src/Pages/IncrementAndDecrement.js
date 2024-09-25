import React, { useState } from 'react';
import './IncrementAndDecrement.css';
import { Button } from 'react-bootstrap';

function IncrementAndDecrement() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    return (
        <div className="counter-container">
            <h1 className="counter-display">{count}</h1>
            <div className="button-group">
                <Button variant="success" onClick={handleIncrement}>Increment</Button>
                <Button variant="sucess" onClick={handleDecrement}>Decrement</Button>
            </div>
        </div>
    );
}

export default IncrementAndDecrement;
