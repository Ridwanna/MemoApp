import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>oooops!!!</h2>
            <p>Page does not exist</p>
            <Link to="/"> Back to Home!!</Link>
        </div>
     );
}
 
export default NotFound;