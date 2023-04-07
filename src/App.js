import "./App.css";
import { Button } from "react-bootstrap";
import TopNavBart from "./components/TopNavBart";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      My apps
      <Button>React Bootstrap</Button>
    </div>
  );
}

export default App;
