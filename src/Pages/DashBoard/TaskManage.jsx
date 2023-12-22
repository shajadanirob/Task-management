import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const TaskManage = () => {
    const {user} = useAuth()
    const [Tasks ,SetTasks] = useState([])
    axios.get(`http://localhost:5000/allTask/${user?.email}`)
    .then(res => {
        SetTasks(res.data)

    })
    const handleDelete = id => {
        console.log(id)
        axios.delete(`http://localhost:5000/allTask/delete/${id}`)
        .then(res => {
            console.log(res.data)
            toast.success('your task delete succussFully')
        })
    }
    
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Name</th>
        <th>Task drescription</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
    {Tasks.map((task,index) =>   <tr key={task._id}>
        <th>{index+1}</th>
        <td>{task.TaskName}</td>
        <td>{task.TaskDescription}</td>
        <td>
            <button onClick={() => handleDelete(task._id)} className="btn btn-sm bg-red-600 text-white">Delete</button>
        </td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TaskManage;