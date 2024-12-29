import React, { useState } from "react";
import styles from "./TaskType.module.css";

function TaskType({ setTaskType, setSelectedOption }) {
    const [dropdownToggled, setDropdownToggled] = useState(false);
    const [selectedOption, setSelectedOptionLocal] = useState('Select type');

    const dropdownOptions = [
        { id: 1, label: "Priority", value: "priority" },
        { id: 2, label: "Important", value: "important" },
        { id: 3, label: "Secondary", value: "secondary" },
        { id: 4, label: "Do Later", value: "dolater" },
    ];

    const handleOptionClick = (label) => {
        setSelectedOptionLocal(label);
        setTaskType(label);
        setDropdownToggled(false);
    };

    return (
        <div className={styles.dropdown}>
            <button
                className={`${styles.dropdownBtn} ${selectedOption !== "Select type" ? styles.selected : ""}`}
                onClick={() => setDropdownToggled(!dropdownToggled)}
            >
                {selectedOption}
            </button>
            <div className={dropdownToggled ? styles.dropdownListVisible : styles.dropdownList}>
                {dropdownOptions.map((option, index) => (
                    <button
                        key={index}
                        className={styles.dropdownItem}
                        onClick={() => handleOptionClick(option.label)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TaskType;
