import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const AddActivity = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const [dateCreated, setDateCreated] = useState(new Date().toLocaleString());

    const handleSubmit = (e) => {
        e.preventDefault();
        const activity = {title, body, dateCreated};
        setIsPending(true);

        fetch('http://localhost:8000/activities', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(activity)
        }).then(() => {
            setTimeout(() => {                
            setIsPending(false);
            }, 2000);
            history.push('/');
        })
    }

    const handleReset = () => {
        // setTitle(null);
        // setBody(null);
        // setDateCreated(null);
        // history.location('/AddActivity')
        window.location.reload();
    }

    return (
        <div className="add-activity">
            <h2>Add New Activity</h2>
            <form onSubmit={handleSubmit}>
                <label>Activity Title</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <label>Activity Details</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Date Created</label>
                <input type="text"
                required
                readOnly                
                value={dateCreated}
                onChange={(e)=>setDateCreated(e.target.value)}
                />

                {!isPending && <button>Add Activity</button>}
                {isPending && <button disabled>Adding activity.....</button> }
                { <button onClick={handleReset}>Reset</button> }
            </form>
            <Link to="/">Return to Homepage</Link>
        </div>
    );
}

export default AddActivity;