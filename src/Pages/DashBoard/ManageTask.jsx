import axios from "axios";
import useAuth from "../../Hooks/UseAuth";
import { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper"; // Import the immutability-helper library
import ManageSingle from "./ManageSingle";

const Types = {
  TASK: "task",
};

const ManageTask = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/allTask/${user?.email}`).then((res) => {
      setTasks(res.data);
    });
  }, [user]);

  const moveTask = (dragIndex, hoverIndex) => {
    const draggedTask = tasks[dragIndex];
    setTasks(
      update(tasks, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedTask],
        ],
      })
    );
  };

  const Task = ({ task, index }) => {
    const [{ isDragging }, ref] = useDrag({
      type: Types.TASK,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: Types.TASK,
      hover: (item) => {
        if (item.index !== index) {
          moveTask(item.index, index);
          item.index = index;
        }
      },
    });

    return (
      <div
        ref={(node) => ref(drop(node))}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
        }}
      >
        <ManageSingle key={task._id} task={task}></ManageSingle>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="border-4 h-[100vh] overflow-y-scroll">
          <h1 className="text-center text-xl font-bold text-red-600">
            across to-do
          </h1>
          <div className="gap-10 space-y-6">
            {tasks.map((task, index) => (
              <Task key={task._id} task={task} index={index} />
            ))}
          </div>
        </div>

        <div className="border-4 h-[100vh] overflow-y-scroll">
          <h1 className="text-center text-xl font-bold text-yellow-500">
            ongoing
          </h1>
          <div className="gap-10 space-y-6">
            {tasks
              .filter((task) => task.status === "ongoing")
              .map((ongoingTask, index) => (
                <ManageSingle
                  key={ongoingTask._id}
                  task={ongoingTask}
                ></ManageSingle>
              ))}
          </div>
        </div>

        <div className="border-4 h-[100vh] overflow-y-scroll">
          <h1 className="text-center text-xl font-bold text-green-700">
            completed
          </h1>
          <div className="gap-10 space-y-6">
            {tasks
              .filter((task) => task.status === "completed")
              .map((completedTask) => (
                <ManageSingle
                  key={completedTask._id}
                  task={completedTask}
                ></ManageSingle>
              ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ManageTask;
