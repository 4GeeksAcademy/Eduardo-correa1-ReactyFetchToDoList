import React, { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
//include images into your bundle
import ListTodos from "./ListTodos";
import DeleteButton from "./DeleteButton";
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [createdUserName, setCreatedUserName] = useState("");
	
	
	//contenido
	return (
		<>
		<CreateUser nameInHome={setCreatedUserName} />

		<div className="text-center container">
			
			<h1 className="text-center mt-5">Tareas pendientes {createdUserName}</h1>
			<ListTodos userName={createdUserName} />
			<DeleteButton />
		</div>
		</>
	);
	
};



export default Home;
