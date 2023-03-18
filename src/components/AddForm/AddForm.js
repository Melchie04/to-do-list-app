const AddForm = ({ newTask, setNewTask, addTask }) => {
  return(
    <>
      <div className="row">
        <div className="col input-group w-auto">
          <input 
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
          <button
            onClick={addTask}
            className="btn btn-primary btn-lg text-light"
          >ADD TASK</button>
        </div>
      </div>
      <br />
    </>
  )
}

export default AddForm;