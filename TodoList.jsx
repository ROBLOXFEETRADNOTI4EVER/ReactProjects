import React,{useState} from "react"
function TodoList(){
    const [tasks,setTasks] = useState(["Take a shit","Get out of bed","say hi to groupchat",]);
    const [newTask,setNewTask] = useState("");
    function HandleImputChange(event){
        setNewTask(event.target.value)
    }
    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

   function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="group row">
            <h1>Todo List</h1>
            <div>
                <input type="text" 
                        placeholder="Enter A task..."
                        value={newTask}
                        onChange={HandleImputChange}/>
                        <button onClick={addTask}>Add</button>
            </div>
            <ol>
            {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="btn-primary" onClick={() => deleteTask(index)}>X</button>
                    <button className="btn-primary" onClick={() => moveTaskUp(index)}>⬆️</button>
                    <button className="btn-primary" onClick={() => moveTaskDown(index)}>⬇️</button>

                </li>
            )}
            </ol>
        </div>
    );
}
export default TodoList