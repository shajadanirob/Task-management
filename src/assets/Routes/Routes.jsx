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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
     
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
  ]
  },
]);
export default router