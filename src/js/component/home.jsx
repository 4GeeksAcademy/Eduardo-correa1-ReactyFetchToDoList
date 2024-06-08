import React, { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
//include images into your bundle
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
			<div className="taskContainer">
			<ul className="mt-5 text-center">
				<li><input type="text" placeholder="Agrega tu tarea"/></li>
				
			</ul>
			<div className="text-start taskCounter"><p> tareas pendientes</p></div>
			<button className="btn">Borrar todas las tareas</button>
			</div>
			

		</div>
		</>
	);
	
};



export default Home;
