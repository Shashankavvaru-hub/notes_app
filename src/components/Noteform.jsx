import { useState } from "react";
const Noteform = ({notes,setNotes}) => {
  const [formdata,setFormdata]=useState({
    title:'',
    priority:'',
    category:'',
    description:''
  })
  const [isFormVisible,setIsFormVisible]=useState(false);
  const handleChange=(e)=>{
    setFormdata({
        ...formdata,
        [e.target.name]:e.target.value
    });
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newNote={
        id:Date.now(),
        ...formdata
    }
    setNotes([newNote,...notes]);

    setFormdata({
      title: "",
      priority: "",
      category: "",
      description: "",
    });

  }
  return (
    <>
      <button
        className=" rounded-lg w-full border border-black p-1 mb-2"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Hide Form" : "Add Note"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="title" className="font-semibold block pb-2">
              Title :
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formdata.title}
              placeholder="Enter the Title"
              className="w-full border border-b-black rounded-lg p-3 placeholder-black"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="priority" className="font-semibold block pb-2">
              Priority :
            </label>
            <select
              name="priority"
              id="priority"
              value={formdata.priority}
              className="w-full border border-b-black rounded-lg p-3"
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="font-semibold block pb-2">
              Category :
            </label>
            <select
              name="category"
              id="category"
              className="w-full border border-b-black rounded-lg p-3"
              value={formdata.category}
              onChange={handleChange}
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="ideas">Ideas</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="font-semibold block pb-2">
              Description :
            </label>
            <textarea
              name="description"
              id="description"
              value={formdata.description}
              className="border w-full h-30 rounded-lg p-3"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4 flex justify-center">
            <button className="w-full border rounded-lg p-1 bg-green-700">
              Add Note
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Noteform;
