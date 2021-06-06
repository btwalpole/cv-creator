import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>CV Creator</p>
        <PersonalInfo />
        <Experience />
      </header>
    </div>
  );
}

export default App;
