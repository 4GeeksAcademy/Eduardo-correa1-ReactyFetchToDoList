import React from "react";


const DeleteButton = ({clearTasks}) =>{
           
    return(
        <div>
			<button className="btn" onClick={clearTasks}>Borrar todas las tareas</button>
			</div>
    )
}

export default DeleteButton;