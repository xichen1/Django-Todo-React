import { useState, useEffect } from "react";
import TabList from "./Components/TabList";
import Item from "./Components/Item";
import Modal from "./Components/Modal";
import todoService  from './services/todos';

const App = () =>{
  const [viewCompleted, setViewCompleted] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState({title: "", description: "", completed: false});

  useEffect(async () => {
    await receiveAllTodos();
  }, [])

  const receiveAllTodos = async () => {
    try{
      const data = await todoService.getAll();
      setTodoList(data);
    } catch (exception) {
      console.log(exception);
    }
  }

  const toggle = () => {
    setModal(!modal);
  };

  const handleSubmit = async (item) => {
    toggle();

    if (item.id) {
      try{
        const res = await todoService.modifyTodo(item);
        console.log(res);
        await receiveAllTodos();
      } catch (exception) {
        console.log(exception);
      }
    } else {
      try{
        const res = await todoService.createTodo(item);
        await receiveAllTodos();
      } catch (exception) {
        console.log(exception);
      }
    }
  };

  const handleDelete = async (item) => {
    await todoService.deleteTodo(item);
    await receiveAllTodos();
  }

  const createItem = () => {
    const item = { title: "", description: "", completed: false };
    setActiveItem(item);
    setModal(!modal);
  }

  const editItem = (item) => {
    // const item = { title: "", description: "", completed: false };
    setActiveItem(item);
    setModal(!modal);
  }


  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo App</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={createItem}>
                Add task
              </button>
            </div>
            <TabList viewCompleted={viewCompleted} setViewCompleted={setViewCompleted}/>
            <ul className="list-group list-group-flush border-top-0">
              <Item todoList={todoList} viewCompleted={viewCompleted} editItem={editItem} handleDelete={handleDelete}/>
            </ul>
          </div>
        </div>
      </div>
      {modal ? (
        <Modal
          item={activeItem}
          toggle={toggle}
          onSave={handleSubmit}
        />
      ) : null}
    </main>
  );
}

export default App;
