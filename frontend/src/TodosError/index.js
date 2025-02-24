import './TodosError.css';

function TodosError({ error }) {
    return (
        <div className="todos-error">
            <h2>Something went wrong</h2>
            <p>{error}</p>
        </div>
    );
}

export { TodosError }