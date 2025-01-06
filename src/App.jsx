import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  let marks = 80;

  return <>{marks > 80 ? <h1>ok</h1> : <h1>ok</h1>}</>;
};

export default App;
