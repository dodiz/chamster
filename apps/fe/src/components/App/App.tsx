import { FC, useState } from "react";
import { useCounter } from "../../state/counter/useCounter";
import { Homepage } from "../Homepage";

import "./app.css";

export const App: FC = () => {
  const { prev, next, reset, count, set } = useCounter();

  const [n, setN] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      <button onClick={reset}>Reset</button>
      <div>
        <input
          type="number"
          value={n}
          onChange={({ target }) => setN(+target.value || 0)}
        />
        <button onClick={() => set(n)}>Set</button>
      </div>
    </div>
  );
};
