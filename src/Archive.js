import List from "./List";
import useFetch from "./useFetch";
const Archive = () => {
    const {data: lists, isPending, error} = useFetch("http://localhost:8000/archived");

    const isEnable = false;
    return (
        <div className="archive">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {lists && <List lists = {lists} title="Archived List" isEnable={isEnable}/>}
        </div>
    );
}
 
export default Archive;