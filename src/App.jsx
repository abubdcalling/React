import React, { useState } from "react";
import Hero from "./component/Hero";

const App = () => {
  const [count, setCount] = useState(0);

  const itemob = {
    name: "abu said",
    age: 20,
  };

  return (
    <div>
      <Hero item={itemob} />
    </div>
  );
};

export default App;
