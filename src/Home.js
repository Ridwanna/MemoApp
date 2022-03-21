import ActivityList from "./ActivityList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: activities, isPending, error } = useFetch('http://localhost:8000/activities')

    return (
        <div>
            <main className="wrapper">
                <header className="">
                    <h1>Daily activities</h1>
                    <p>my daily activities record</p>

                    <input
                        type="text"
                        name="serch"
                        id="search-memo"
                        placeholder="search activity..."
                    />

                </header>
            </main>
            <div className="home" style={{width:''}}>
                {error && <div> {error} </div>}
                { isPending && <div style={{fontSize: '20px', fontStyle:'italic'}}> Loading...... </div> }
                {activities && <ActivityList activities={activities} title="All Activities!" />}
            </div>
        </div> 
    );
}

export default Home;