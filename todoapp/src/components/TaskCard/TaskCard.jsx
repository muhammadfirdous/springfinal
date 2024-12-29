import React from "react";
import styles from "./TaskCard.module.css";
function TaskCard({ tasks }) {
    return (
        <div>
            {tasks.map((task) => (
                <div className={styles.card} key={task.id}>
                    <strong>{task.title}</strong>
                    <p>{task.description}</p>
                    <small>Due: {task.dueDate || "N/A"}</small>
                </div>
            ))}
        </div>
    );
}

export default TaskCard;
