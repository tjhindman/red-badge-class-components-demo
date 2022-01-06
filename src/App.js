import Counter from "./components/Counter";

import "./App.css";
import goldStar from "./photos/gold-star.jpeg";

function App() {
  return (
    <div className="App">
      <img src={goldStar} alt="Gold Star" />
      <h1>Hello Gold Star Counter!</h1>
      <Counter name="Paul" />
      <Counter name="Adam" />
      <Counter name="TJ" />
    </div>
  );
}

export default App;
