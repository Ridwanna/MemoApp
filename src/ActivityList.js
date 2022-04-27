import { Link } from "react-router-dom";

const ActivityList = ({activities, title}) => {
    return ( 
        <div className="activity-list">
            <h2>{title}</h2>
            {activities.map((activity) =>
                <div className="activity-preview" key={activity.id}>
                    <Link to={`/activities/${activity.id}`}>
                        <h2>{activity.title}</h2>
                        <p>{ activity.body.slice(0, 120)}.....</p>
                        <p>Date Created: {activity['dateCreated']}</p>
                    </Link>
                </div>
            )}
        </div>
     );
}
 
export default ActivityList;