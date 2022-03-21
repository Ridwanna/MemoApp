const Jumbotron = () => {
    return (
        <main className="wrapper">
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
        </main>
    );
}

export default Jumbotron;