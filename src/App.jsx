import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const city = ["dhaka", "london", "delhi", "kolka"];

  return (
    <div>
      <ol>
        {city.map((item, i) => {
          return <li key={i.toString()}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
