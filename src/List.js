import {Link} from 'react-router-dom';

const List = ({lists, title, isEnable, handleDelete}) => {

    return (
        <div className="list-items">
            <h1>{title}</h1>
                {lists.map((list)=>(
                    <div key={list.id}>
                    {isEnable && (<Link to={"/lists/"+list.id}>
                        <div className="content">
                            <h2>{list.title}</h2>
                            <div className="inside-element">
                                <p className="date">Completion By: {list.completion}</p>
                                <p className="progress" >
                                    Progress: {list.progress+"%   "} 
                                    <progress value={list.progress} max="100">{list.progress+"%"} </progress>
                                </p>
                            </div>
                        </div>
                    </Link>)}
                    {!isEnable && (
                        <div className="content">
                        <h2>{list.title}</h2>
                        <div className="inside-element">
                            <p className="date">Completion By: {list.completion}</p>
                            <p className="progress" >
                                Progress: {list.progress+"%   "} 
                                <progress value={list.progress} max="100">{list.progress+"%"} </progress>
                            </p>
                        </div>
                    </div>
                    )}
                    {isEnable && <button onClick={()=>handleDelete(list.id, list.title, list.completion, list.progress, list.resources)}>Delete Item</button>}
                    </div>
                ))}
        </div>
    )
}
 
export default List;