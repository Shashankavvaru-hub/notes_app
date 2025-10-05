const NoteList = ({notes , deleteNote}) => {
    if (!notes || notes.length === 0) {
      return (
        <p className="text-center text-gray-500 mt-4">No notes Yet</p>
      );
    }
      return (
        <div className="space-y-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-4 bg-white rounded-lg shadow-md border-l-4"
              style={{
                borderLeftColor: note.priority==="high"?"red" : note.priority==="low"?"green":"orange"
              }}
            >
              <h3 className="text-lg font-bold">{note.title}</h3>
              <p className="p text-small text-grey-600">
                <strong>Category : {note.category}</strong>
              </p>
              <p className="p text-small text-grey-600">
                <strong>Priority : {note.priority}</strong>
              </p>
              <p className="mt-2">{note.description}</p>
              <button 
              onClick={()=>deleteNote(note.id)}
              className="mt-3 transition rounded-lg bg-red-500 px-3 border hover:bg-red-700">Delete</button>
            </div>
          ))}
        </div>
      );
}
 
export default NoteList;