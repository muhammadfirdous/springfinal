import React from "react";
import "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#tasklist">Task List</a></li>
                <li><a href="#calendar">Calendar</a></li>
                <li><a href="#settings">Settings</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
