import Hero from "./components/Hero";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
