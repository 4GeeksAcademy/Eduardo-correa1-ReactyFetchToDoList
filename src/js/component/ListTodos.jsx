import React, { useState } from "react";

const ListTodos = ({userName})=>{

    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const PostToDo = async()=>{
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
            setTasks([...tasks, inputValue]);
            setInputValue("");
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="taskContainer">
			<ul className="mt-5 text-center">
				<li><input type="text" placeholder="Agrega tu tarea" onChange={(tarea)=>
                    setInputValue(tarea.target.value)} value={inputValue} onKeyPress={(event)=>{
                        if(event.key === "Enter"){
                            PostToDo();
                    }}}/></li>
                    {tasks.map((task, index) => <li key={index}><i onClick={()=>setTasks(tasks.filter((_, currentIndex) => index != currentIndex))} className="fas fa-trash-alt"></i> {task}</li>)}
				
			</ul>
			<div className="text-start taskCounter"><p>{tasks.length} tareas pendientes</p></div>
            </div>
    )
};

export default ListTodos;