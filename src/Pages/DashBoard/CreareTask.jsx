import axios from "axios";
import useAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";


const CreareTask = () => {
    const {user} = useAuth()
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const TaskName = form.ServiceName.value;
        const TaskDescription = form.description.value;
        const AllData = {userName,userEmail,TaskName,TaskDescription}
        console.log(AllData)
        axios.post('https://task-management-server-puce-chi.vercel.app/allTask',AllData)
        .then(res => {
            console.log(res.data)
            toast.success('task add succesFully')
        })
    }
    return (
        <div className="bg-white border border-4 rounded-lg shadow relative w-full">
        
        <h3 className="text-3l text-[#5c98f2] text-center font-bold">
            Create a Task
        </h3>

        <div className="flex items-start justify-between p-5 border-b rounded-t"></div>

        <div className="p-6 space-y-6">
            {/*  */}
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2"> Your name</label>
                        <input readOnly type="text" defaultValue={user?.displayName} name="name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Task Name</label>
                        <input type="text" name="ServiceName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Service Name" required />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Your email</label>
                        <input type="email" readOnly defaultValue={user?.email} name="email" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                    </div>
                
                
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Service Provider img</label>
                        <input type="text" name="providerImg" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" defaultValue={user.photoURL} placeholder="photo url" readOnly required />
                    </div>
                
                    <div className="col-span-full">
                        <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Task Description</label>
                        <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Description" name="description"></textarea>
                    </div>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b flex items-center justify-center">
                    <button className=" inline-flex text-white bg-[#5c98f2] border-0  focus:outline-none hover:bg-[5c98f2] rounded-full py-2 px-6 text-lg" type="submit">Create Task</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default CreareTask;