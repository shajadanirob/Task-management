/* eslint-disable react/prop-types */
import {  Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
// import Loader from "../components/Shared/Loader";



const PraivetRoute = ({children}) => {
    const{user,loading} = useAuth()
    const location = useLocation()

    if(loading) return<>
    <div className="flex items-center justify-center h-screen">
<div className="relative">
    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
    </div>
</div>
</div>
    </>
    if(user) return children


    return <Navigate to='/login' state={{from: location}} replace/>

};

export default PraivetRoute;