import logo from './logo.svg';
import './App.css';
import Notes from "./notes";
import NoteList from "./components/note_list/NoteList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteList />
      </header>
    </div>
  );
}

export default App;
