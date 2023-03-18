const UpdateForm = ({ updateData, changeTask, updateTask }) => {
  return(
    <>
      <div className="row">
        <div className="col input-group w-auto">
          <input 
            value={ updateData && updateData.title }
            onChange={ (e) => changeTask(e)}
            className="form-control form-control-lg"
          />
          <button
            onClick={updateTask}
            className="btn btn-primary btn-lg text-light"
          >UPDATE</button>
        </div>
      </div>
      <br />  
    </>
  )
}

export default UpdateForm;