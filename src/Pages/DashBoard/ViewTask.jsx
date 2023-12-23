import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import axios from "axios";
import SingleTaskCard from "./SingleTaskCard";


const ViewTask = () => {
    const {user} = useAuth()
    const [Tasks ,SetTasks] = useState([])
    axios.get(`https://task-management-server-puce-chi.vercel.app/allTask/${user?.email}`)
    .then(res => {
        SetTasks(res.data)

    })
    return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 ">
            {Tasks.map(task => <SingleTaskCard key={task._id}
            task={task}></SingleTaskCard>)}
          </div>
        </div>
    );
};

export default ViewTask;