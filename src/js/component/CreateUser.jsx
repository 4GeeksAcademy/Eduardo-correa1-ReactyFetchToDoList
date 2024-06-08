import React,{ useState } from "react";



const CreateUser = ({nameInHome})=>{
    const [userName, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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
                throw new Error("El nombre no es válido o ya existe, prueba otro");                
            }
            
            const data = await response.json();
            console.log("Usuario creado", data);
            nameInHome(userName)
            setErrorMessage("");            
        } catch (error) {
            setErrorMessage(error.message)
        }
    };

    return(
        <nav className="navbar navbar-light text-center">
  <span className="navbar-brand m-2 h1">
    <input type="text" placeholder="Introduce tu Nombre" value={userName} onChange={handleInputChange} /> <button className="btn" onClick={postUser}>Crear usuario</button></span>
    {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}
</nav>

    )
}

export default CreateUser;