import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
// import { CreateTodoButton } from '../CreateTodoButton';
// import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <main className='cajasContainer'>
      <div className='cajaUno'>
      <TodoCounter />
        <TodoSearch />

        <TodoList>
          {error && <TodosError />}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}
          
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>

      <div className='cajaDos'>
  {/* {!!openModal && (
          <Modal> */}
            <TodoForm />
          {/* </Modal>
        )}  */}

        {/* <CreateTodoButton
          setOpenModal={setOpenModal}
        /> */}
      </div>
      </main>

    </React.Fragment>
  );
}


export { AppUI };