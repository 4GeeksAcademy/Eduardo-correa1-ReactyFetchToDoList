import React, { useState } from "react";

const ListTodos = ({userName, tasks, setTasks })=>{

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const postToDo = async()=>{
        if(!userName){
            setErrorMessage("Debes crear un usuario antes de agregar tareas.");
            return;
        }
        const bodyToDo = {label: inputValue, done: false};
        try {
            const response = await fetch(`https://playground.4geeks.com/todo/todos/${userName}`,{
                method: "POST",
				headers: {
					"accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(bodyToDo)

            });
            if (!response.ok) {
                throw new Error("Error al agregar la tarea");
            }
            const result = await response.json()
			console.log(result)
            setTasks([...tasks, { label: inputValue, done: false, id: result.id }]);
            setInputValue("");
            setErrorMessage("");
            
        } catch (error) {
            console.log(error)
        }
    }
//funcion PUT
const taskDone = async (taskId, index) =>{
    const task = tasks[index];
    const updatedTask = { label: task.label, is_done: !task.is_done };
    try {
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${taskId}`,{
            method: "PUT",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });
        if (!response.ok) {
            throw new Error("Error al actualizar la tarea");
        }
        const result = await response.json();
        console.log(result);
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, is_done: updatedTask.is_done } : task
        );
        setTasks(updatedTasks);
        setErrorMessage("");
    } catch (error) {
        console.log(error)
    }
};
    const pendingTasks = tasks.filter(task => !task.is_done).length;
    const doneTasks = tasks.filter(task => task.is_done).length;

    return(
        <div className="taskContainer">
			<ul className="mt-5 text-center">
				<li><input type="text" placeholder="Agrega tu tarea" onChange={(tarea)=>
                    setInputValue(tarea.target.value)} value={inputValue} onKeyPress={(event)=>{
                        if(event.key === "Enter"){
                            postToDo();
                    }}}/></li>
                    {tasks.map((task, index) => <li key={index}><i onClick={()=>taskDone(task.id, index)}
                            className={task.is_done ? "fas fa-check-square" : "far fa-square"}
                        ></i>{" "}
                        {task.label}</li>)}
				
			</ul>
            {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
			<div className="text-start taskCounter"><p>{pendingTasks} tareas pendientes, {doneTasks} tareas realizadas</p></div>
            </div>
    )
};

export default ListTodos;