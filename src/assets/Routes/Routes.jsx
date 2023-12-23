import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../Pages/DashBoard/Dashboard";
import PraivetRoute from "./Praivet";
import CreareTask from "../../Pages/DashBoard/CreareTask";
import ManageTask from "../../Pages/DashBoard/ManageTask";
import ViewTask from "../../Pages/DashBoard/ViewTask";
import TaskManage from "../../Pages/DashBoard/TaskManage";
import Profile from "../../Pages/DashBoard/Profile";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Task from "../../Pages/Task/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/task',
        element: <Task/>
      }
     
    ]
  },
  {

    path: '/login',
    element: <Login />

  },
  {

    path: '/signUp',
    element: <Register />

  },
  {
    path:'dashboard',
    element: <PraivetRoute>
      <Dashboard/>
    </PraivetRoute>,
    children:[
      {
        path:'dashboard',
        element: <PraivetRoute>
          <Profile/>
        </PraivetRoute>

      },
      {
      path:'dashboard/createTask',
      element: <PraivetRoute>
        <CreareTask/>
      </PraivetRoute>
    },
      {
      path:'dashboard/manageTask',
      element: <PraivetRoute>
        <ManageTask/>
      </PraivetRoute>
    },
      {
      path:'dashboard/viewTask',
      element: <PraivetRoute>
        <ViewTask/>
      </PraivetRoute>
    },
      {
      path:'dashboard/TaskManage',
      element: <PraivetRoute>
        <TaskManage/>
      </PraivetRoute>
    },
  ]
  },
]);
export default router