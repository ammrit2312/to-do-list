
const NavBar = () => {
    return ( 
        <div className="navbar">
            <h2>Amritesh's To-Do list</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Add to List</a>
                <a href="/archive">Archived Lists</a>
            </div>
        </div>
    );
}
 
export default NavBar;