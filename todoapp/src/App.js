import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import TaskModal from "./components/TaskModal/TaskModal";

function App() {
    const [columns, setColumns] = useState([
        { title: "Todo", tasks: [] },
        { title: "In Progress", tasks: [] },
        { title: "Completed", tasks: [] },
    ]);
    const [showModal, setShowModal] = useState(false);

    const addTask = (columnTitle, title, description, dueDate) => {
        const updatedColumns = columns.map((col) =>
            col.title === columnTitle
                ? { ...col, tasks: [...col.tasks, { title, description, dueDate }] }
                : col
        );
        setColumns(updatedColumns);
        setShowModal(false);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => setShowModal(true)}
                >
                    Add Task
                </button>
                <TaskBoard columns={columns} />
                {showModal && (
                    <TaskModal onAddTask={addTask} onClose={() => setShowModal(false)} />
                )}
            </div>
        </div>
    );
}

export default App;
