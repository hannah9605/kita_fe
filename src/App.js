import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
