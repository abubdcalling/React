import React, { useState } from "react";
import Hero from "./component/Hero";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero title="learn with me" />
    </div>
  );
};

export default App;
