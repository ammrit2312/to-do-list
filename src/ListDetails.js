import useFetch from "./useFetch";
import {useParams} from "react-router-dom";
import {useState} from 'react';
import Form from "./Form";

const ListDetails = () => {
    const {id} = useParams();
    const {data: list, isPending, error} = useFetch('http://localhost:8000/lists/'+id);
    const [isEdit, setIsEdit] = useState(false);

    //Working on the main editing part
    const [title1, setTitle] = useState('');
    const [completion1, setCompletion] = useState('');
    const [progress1, setProgress] = useState('');
    const [resources1, setResources] = useState('');


    const editSubmit = (e)=>{
        e.preventDefault();
        setIsEdit(true);
        setTitle(list.title);
        setCompletion(list.completion);
        setProgress(list.progress);
        setResources(list.resources);
    }


    const submitData = (e, title, completion, progress, resources)=>{
        e.preventDefault();
        const list_data = {title, completion, progress, resources};

        fetch('http://localhost:8000/lists/'+id, {
            method: 'PUT',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(list_data)
        }).then(()=>{
            console.log("Done uploading");
            window.location.reload(false);
        });

    }



    return (
        <div className="list-detail">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {list && (
                <article>
                    <h2>{list.title}</h2>
                    <p>{"Completion By: "+list.completion}</p>
                    <p>{"Progress:  "+list.progress+"%   "}<progress value={list.progress} max="100"></progress></p>
                    <p>Resources: {list.resources}</p>
                </article>
            )}
            {!isEdit && <button onClick={editSubmit}>
                    Edit Details
            </button>}
            {isEdit && <button disabled>Edit Details</button>}
            {isEdit && <Form label="Edit the details" title={title1} completion={completion1} progress = {progress1} resources={resources1} handleSubmit={submitData}/>}
        </div>
    );
}
 
export default ListDetails;