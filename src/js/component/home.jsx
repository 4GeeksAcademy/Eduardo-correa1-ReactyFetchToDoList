import React, { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
import ListTodos from "./ListTodos";
import DeleteButton from "./DeleteButton";

const Home = () => {
	const [createdUserName, setCreatedUserName] = useState("");
	const [tasks, setTasks] = useState([]);
// Elimina el usuario y todas las tareas
	const clearTasks = async () => {
		try {
            const response = await fetch(`https://playground.4geeks.com/todo/users/${createdUserName}`, {
                method: "DELETE",
                headers: {
                    "accept": "application/json"
                }
            });

            console.log(`Usuario ${createdUserName} eliminado`);
            setTasks([]);
			setCreatedUserName("")
        } catch (error) {
            console.log(error);
        }
    };	
	return (
		<>		
		<CreateUser nameInHome={setCreatedUserName} />
		<div className="text-center container">			
			<h1 className="text-center mt-5">Tareas pendientes {createdUserName}</h1>
			<ListTodos userName={createdUserName} tasks={tasks} setTasks={setTasks} />
			<DeleteButton clearTasks={clearTasks} />
		</div>
		</>
	);	
};
export default Home;
