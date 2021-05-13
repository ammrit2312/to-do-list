import {useState} from 'react';

const Form = (props) => {

    const label = props.label;
    const [title, setTitle] = useState(props.title);
    const [completion, setCompletion] = useState(props.completion);
    const [progress, setProgress] = useState(props.progress);
    const [resources, setResources] = useState(props.resources);
    const handleSubmit = props.handleSubmit;


    return (
        <div className="create">
            <h2>{label}</h2>
            <form onSubmit={(e)=>handleSubmit(e, title, completion, progress, resources)}>
                <label>Title</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Completion Date</label>
                <input 
                    type="text"
                    required
                    value = {completion}
                    onChange = {(e)=>setCompletion(e.target.value)}
                />
                <label>Progress</label>
                <input
                    type="text"
                    required
                    value = {progress}
                    onChange={(e)=>setProgress(e.target.value)}
                />
                <label>Resources</label>
                <textarea 
                    required
                    value = {resources}
                    onChange={(e)=>setResources(e.target.value)}>
                </textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Form;




// {
//     "title": "Make Spaghetti",
//     "completion": "18/5/2021",
//     "progress": "30",
//     "resources": "https://www.yahoo.com",
//     "id": 1
//   },