import { useState } from "react";

function AddToDo({addTodo}) {
    const [input, setInput] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput('');
    };

    return (
        <form onSubmit={submit}>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Create New Task." />
            <button type = "submit">Add</button>
        </form>
    );
}

export default AddToDo;