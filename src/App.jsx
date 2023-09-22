import { useState } from "react";
import "./App.css";
import  Hero  from "./components/Hero/Hero";
import  Demo  from "./components/Demo/Demo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </>
  );
}

export default App;
