import React from "react";
import "./style.scss";

const App = () => {
  return (
    <div>
      <h1>React</h1>
      <p>JSX extension</p>
      <img
        src={require("../assets/photo-1501183007986-d0d080b147f9.jpeg").default}
        alt=""
      />
    </div>
  );
};

export default App;
