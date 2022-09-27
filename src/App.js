import "./App.css";
import Chatting from "./Components/Homecomponents.jsx/chat";
import Scrool from "./Components/Homecomponents.jsx/Topscrool";
import MainNavbar from "./Components/Navbars/Mainnavbar";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Scrool />
      <Chatting />
    </div>
  );
}

export default App;
