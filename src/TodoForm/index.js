// import { set } from 'date-fns';
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  // const onCancel = () => {
  //   document.getElementsByName('textarea').value = " ";
  // };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Create a new TO DO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Example: Write a new draft."
      />
      <div className="TodoForm-buttonContainer">
         <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          ADD
        </button>
        {/* <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button> */}
      </div>
    </form>
  );
}

export { TodoForm };