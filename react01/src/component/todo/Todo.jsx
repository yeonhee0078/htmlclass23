import { useEffect, useState } from "react";


const Todo = () => {
    const [todo, setTodo] = useState([]);
    
   
    const onSubmit = (event) => {
        event.preventDefault();
        console.log("event : ", event.target.item.value);
        setTodo([...todo, event.target.item.value]);
        event.target.reset();
    };

    const deleteTodo = (todo) => {
        console.log("todo : ", todo.target.name);
        setTodo();
        const todoResult = todo.filter((word) => 
        todo.reset()

    )};

    return(
        <div>
            <h2>Todo</h2>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="item"
                />
                <button>Add</button>
            </form>
           
             {todo.map(todo => 
                <li>    
                     <form onChange={deleteTodo}>
                    {todo}
                    <button 
                    name="delete" 
                    >x</button>
                      </form>
                </li>
             )}
          
            

        </div>
    );
}

export default Todo;