import './App.css';
import SideBar from './SideBar';
import Main from './Main';
import { useState } from "react";
import uuid from "react-uuid";    //npm install react-uuid//

function App() {

  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    }
    setNotes([newNote, ...notes]);
  };



  return (
    <div className="App">
      <SideBar notes={notes} onAddNote={onAddNote} />
      <Main />

    </div>
  );
}

export default App;
