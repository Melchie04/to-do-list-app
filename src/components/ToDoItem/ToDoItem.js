import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrashCan, faRemove } from '@fortawesome/free-solid-svg-icons';
import './ToDoItem.css';

const ToDoItem = ({ toDo, markDone, setUpdateData, deleteTask, updateData, cancelUpdate }) => {
  return(
    <div>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="task-bg row mx-1 mb-3 py-2">
              <div className={`${ task.status ? 'text-muted' : 'text-primary  border-primary' } col-auto fs-5 border-end border-2 d-flex align-items-center`}>
                <span className="task-number">{index + 1}</span>
              </div>
              <div className={`${ task.status ? 'text-decoration-line-through text-muted' : '' } col text-start fs-5 text-break ps-3`}>
                <span className="task-text">{task.title}</span>
              </div>
              <div className="icons-wrap col-auto d-flex justify-content-around align-items-center">
                {task.id === updateData.id ? (
                  <span
                    className="text-danger"
                    title="Cancel"
                    onClick={cancelUpdate}
                  >
                    <FontAwesomeIcon icon={faRemove} />
                  </span>
                ) : (<>
                  <span
                    className={task.status ? "text-success" : "text-primary"}
                    title="Done"
                    onClick={ (e) => markDone(task.id) }
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  {task.status ? null : (<>
                    <span 
                      className="text-primary"
                      title="Edit"
                      onClick={ () => setUpdateData({ 
                        id: task.id, 
                        title: task.title, 
                        status: task.status ? true : false
                      })}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    <span
                      className="text-danger"
                      title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </>)}
                </>)} 
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </div>
  )
}

export default ToDoItem;