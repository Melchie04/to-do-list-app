import {useState} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AddForm from './components/AddForm/AddForm';
import UpdateForm from './components/UpdateForm/UpdateForm';
import ToDoItem from './components/ToDoItem/ToDoItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }

  // Typewriter Effect
  const [ text ] = useTypewriter({
    words: ['Things you have to do', 'Things you want to do', 'You can do it!'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  }); 

  return (
    <div className='container-fluid wrapper'>
      <div className='box text-center text-light'>
        <div>
          <h1 className='pt-3 text-warning'>To Do List</h1>
          <h5 className='pb-3'>
            {text}
            <Cursor />
          </h5>
          {updateData && updateData ? (
            <UpdateForm 
              updateData={updateData}
              changeTask={changeTask}
              updateTask={updateTask}
            />
          ) : (
            <AddForm 
              newTask={newTask}
              setNewTask={setNewTask}
              addTask={addTask}
            />
          )}
        </div>
        <div className='overflow-auto scroll-container'>
          {toDo && toDo.length ? '' : (
            <span className='fs-6 text-muted'>No tasks. Create your to-do list now.</span>
          )}
          <ToDoItem
            toDo={toDo}
            markDone={markDone}
            setUpdateData={setUpdateData}
            deleteTask={deleteTask}
            updateData={updateData}
            cancelUpdate={cancelUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
