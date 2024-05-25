import { useState } from "react";

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  const switchSigns = () => {
    setCount(-count);
  };

  return (
    <div>
      <div data-testid="cypress-count">Count: {count}</div>
      <div>
        <button
          data-testid="cypress-increment"
          className="border p-1"
          onClick={increment}
        >
          Increment
        </button>
        <button className="border p-1" onClick={decrement}>
          Decrement
        </button>
        <button className="border p-1" onClick={reset}>
          Reset
        </button>
        <button className="border p-1" onClick={switchSigns}>
          Switch Signs
        </button>
      </div>
    </div>
  );
};

export default Counter;
