import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [author,setAuthor]=useState("mario");
    const [isPending,setIsPending]=useState(false);

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true);

        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{'Content-type':"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("New blog added");
            setIsPending(false);
            // history.go(-1);
            navigate("/");
        })
    }
    return ( 
        <div className="create">
            <h2>Add new task</h2>
            <form onSubmit={handleSubmit}>
                <label>Task title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Task Description:</label>
                <textarea name="" rows={3} cols={100}
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                {!isPending && <button>Add Task</button>}
                {isPending && <button disabled>Adding task...</button>}
            </form>
        </div>
     );
}
 
export default Create;