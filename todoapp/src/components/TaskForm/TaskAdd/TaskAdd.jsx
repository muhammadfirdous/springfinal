import React from "react";
import styles from "./TaskAdd.module.css";

function TaskAdd({ onAddTask }) {
    const handleAddClick = () => {
        if (onAddTask) {
            onAddTask(); // Call the task adding function if it exists
        } else {
            console.error("onAddTask function is not provided");
        }
    };

    return (
        <button className={styles.btn} onClick={handleAddClick}>
            Add
        </button>
    );
}

export default TaskAdd;
