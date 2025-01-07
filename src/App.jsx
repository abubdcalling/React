import { useState } from "react";

const App = () => {
  const [myob, setOb] = useState({
    key1: "key 1 value 1",
    key2: "key 2 value 2",
    key3: "key 3 value 3",
  });

  const change = () => {
    setOb({
      key1: "new key 1 value 1",
      key2: "new key 2 value 2",
      key3: "new key 3 value 3",
    });
  };

  return (
    <div>
      <h1>{myob.key3}</h1>
      <button onClick={change}>click</button>
    </div>
  );
};

export default App;
