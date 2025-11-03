import { Link } from 'react-router';
import React from 'react';
import './TaskDetail'
import TaskDetail from './TaskDetail';

let tasks = [
    {id: 123, title: "Dishes", description: "doing the dishes"},
    {id: 124, title: "Laundry", description: "doing the laundry"},
    {id: 125, title: "Dinner", description: "making dinner"}
];

function TaskList() {
    const tasksPrint = tasks.map(tasks => {
        return `ID: ${tasks.id} Title: ${tasks.title} Description: ${tasks.description}`;
        });

    return (
        <>
        <h1>Tasks:</h1>
        <div>
            {tasksPrint};
            {/* <Link to="/TaskDetail">Task Details: {}</Link> */}
        </div>
        </>
    )
}

export default TaskList;