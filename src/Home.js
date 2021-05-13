
import List from "./List";
import useFetch from "./useFetch";

const Home = () => {
    const {data: lists, isPending, error} = useFetch("http://localhost:8000/lists");

    const isEnable = true;
    const handleDelete = (id, title, completion, progress, resources)=>{

        const list = {title, completion, progress, resources};

        fetch("http://localhost:8000/lists/"+id, {
            method: 'DELETE'
        }).then(()=>{
            console.log("Done");
            window.location.reload(false);
        })

        fetch('http://localhost:8000/archived',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(list)
        })
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {lists && <List lists = {lists} title="To-do List" isEnable={isEnable} handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;