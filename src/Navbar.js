import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
        <nav className="navbar">
            <h2 className="home"><Link to="/">myDaily</Link></h2>
                <Link to="/addActivity">Add Activity</Link>
                <Link to="/about">About Us</Link>
        </nav>

        {/* <main className="wrapper">
                <header className="container page-banner">
                    <h1>Daily activities</h1>
                    <p>my daily activities record</p>

                    <input
                        type="text"
                        name="serch"
                        id="search-memo"
                        placeholder="search activity..."
                    />

                </header>
            </main> */}

        </div>
     );
}
 
export default Navbar;