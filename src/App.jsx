import { useState } from "react";
import Noteform from "./components/Noteform";
import NoteList from "./components/NoteList";
const App = () => {
  const [notes,setNotes]=useState([]);
  {
    console.log(notes);
  }
  const deleteNote=(id)=>{
    setNotes(notes.filter((note)=>note.id!==id))
  }
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {"\u{1F4DD}"} Notes App
      </h2>
      <Noteform notes={notes} setNotes={setNotes}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
  );
}
 
export default App;