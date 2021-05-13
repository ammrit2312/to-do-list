import {useHistory} from "react-router-dom";
import Form from "./Form";
const Create = () => {
    const title = '';
    const completion = '';
    const progress = '';
    const resources = '';
    const history = useHistory();

    const handleSubmit = (e, title, completion, progress, resources)=>{
        e.preventDefault();
        const list = {title, completion, progress, resources};

        setTimeout(()=>{
            fetch('http://localhost:8000/lists',{
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(list)
            }).then(()=>{
                console.log("Done uploading");
                history.push("/");
            });
        }, 1000);
    }


    return (
        <div className="create">
            <Form label="Add New List" title={title} completion={completion} progress = {progress} resources={resources} handleSubmit={handleSubmit}/>
        </div>
    );
}
 
export default Create;