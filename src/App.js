import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav";
import Main from "./pages/main/main";
import Footer from "./components/footer";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
