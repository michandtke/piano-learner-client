import logo from './logo.svg';
import './App.css';
import Notes from "./notes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Notes />
      </header>
    </div>
  );
}

export default App;
