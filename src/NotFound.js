import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY!!</h2>
            <p>That page couldn't be found</p>
            <Link to="/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;