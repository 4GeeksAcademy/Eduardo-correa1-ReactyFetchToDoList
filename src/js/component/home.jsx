import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
	// useEffect(() =>{
	// 	toDo()
	// },[])
	const getToDo = async()=>{
		try {
			const response = await fetch("https://playground.4geeks.com/todo/users/Edu",{
				headers: {
					accept: "application/json"
				}
			})
			const result = await response.json()
			console.log(result)
			
			
		} catch (error) {
			console.log(error)
		}
	}

	const toDo = async()=>{
		try {
			const bodyToDo = {
				"label": inputValue,
				"is_done": false
			}
			const response = await fetch("https://playground.4geeks.com/todo/todos/Edu",{
				method: "POST",
				headers: {
					"accept": "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(bodyToDo)
	
			})
			const result = await response.json()
			console.log(result)
		} catch (error) {
			console.log(error)
			
		}
	
	}
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Mis tareas pendientes</h1>
			<div className="taskContainer">
			<ul className="mt-5 text-center">
				<li><input type="text" placeholder="Agrega tu tarea" onChange={(tarea)=> setInputValue(tarea.target.value)} value={inputValue} onKeyPress={(event)=>{
					if(event.key === "Enter"){
						toDo();
						getToDo();

					}
					}} /></li>
					
				 {task.map((getToDo, index) => <li key={index}><i onClick={()=>setTask(task.filter((getToDo, currentIndex) => index != currentIndex))} className="fas fa-trash-alt"></i> {getToDo}</li>)} 
			</ul>
			<div className="text-start taskCounter"><p>{task.length} tareas pendientes</p></div>
			<button className="btn">Borrar todas las tareas</button>
			</div>
			

		</div>
	);
	
};



export default Home;
