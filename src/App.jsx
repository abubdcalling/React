// import React from "react";
import Hero from "./component/Hero";

const App = () => {
  // const [count, setCount] = useState(0);

  const fun = () => {
    return alert("fun function");
  };

  return (
    <div>
      <Hero fun={fun} />
    </div>
  );
};

export default App;
