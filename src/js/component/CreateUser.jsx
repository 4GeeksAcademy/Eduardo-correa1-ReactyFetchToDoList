import React,{ useState } from "react";



const CreateUser = ({nameInHome})=>{
    const [userName, setUserName] = useState("");
    const handleInputChange = (e) => {
        setUserName(e.target.value);
    }

    const postUser = async()=>{
        try { 
            const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`,{
                method: "POST",
            Headers: {
                "accept": "application/json"},
            body: ""
            });
            if (!response.ok){
                throw new Error("Error al crear el usuario");                
            }
            
            const data = await response.json();
            console.log("Usuario creado", data);
            nameInHome(userName)            
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <nav class="navbar navbar-light text-center">
  <span class="navbar-brand m-2 h1">
    <input type="text" placeholder="Introduce tu Nombre" value={userName} onChange={handleInputChange} /> <button className="btn" onClick={postUser}>Crear usuario</button></span>
</nav>

    )
}

export default CreateUser;