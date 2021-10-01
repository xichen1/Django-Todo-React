const Item = ({todoList, viewCompleted, editItem, handleDelete}) => {
    const newItems = todoList.filter(i => i.completed === viewCompleted);

    return (
        newItems.map(i => {
            return(
                <li key={i.id} 
                className="list-group-item d-flex justify-content-between align-items-center">
                    <span className={`todo-title mr-2 ${viewCompleted ? "completed-todo" : ""}`} title={i.description}>
                        {i.title}
                    </span>
                    <span>
                        <button className="btn btn-secondary mr-2" onClick={() => editItem(i)}>
                            Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => handleDelete(i)}>
                            Delete
                        </button>
                    </span>
                </li>
            );
        })
    );
}

export default Item;