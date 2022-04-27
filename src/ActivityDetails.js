import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import EditActivity from "./EditActivity";


const ActivityDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data:activity, isPending, error } = useFetch(`http://localhost:8000/activities/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:8000/activities/${activity.id}`, {
            method: 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    // const handleClick = () => {
        
    // }

    return ( 
        <div className="activity-details">
            {isPending && <div> Loading ....</div>}
            {error && <div>{ error } </div>}
            {activity && (
                <article>
                    <h2>{activity.title}</h2>
                    <p>{activity['dateCreated']}</p>
                    <div>{ activity.body}</div>
                    <button onClick={handleDelete}>Delete Activity</button>
                    <button><Link to="/editActivity"> Edit Activity </Link></button>
                </article>
            )}
        </div>
     );
}
 
export default ActivityDetails;