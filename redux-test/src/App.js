import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state) => state.account);
  console.log(account);
  return (
    <div className="App">
      <h1>Account Amount: {account}</h1>
    </div>
  );
}

export default App;
