import { useRef } from "react";

const App = () => {
  let headline = useRef();

  const change = () => {
    headline.current.innerText = "hello useref";
  };

  return (
    <div>
      <h1 ref={headline}>Here shows data</h1>
      <button onClick={change}>click</button>
    </div>
  );
};

export default App;
