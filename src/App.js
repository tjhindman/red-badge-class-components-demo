import Counter from "./components/Counter";

import "./App.css";
import goldStar from "./photos/gold-star.jpeg";

function App() {
  return (
    <div className="App">
      <img src={goldStar} alt="Gold Star" />
      <h1>Hello Gold Star Counter!</h1>
      <Counter name="Paul" count={50} status="Like a boss" />
      <Counter name="Adam" count={500} status="I'm cool" />
      <Counter name="TJ" status="Stressin'" />
    </div>
  );
}

export default App;
