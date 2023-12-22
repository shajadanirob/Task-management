import { useState } from 'react'
// Components

// import ToggleBtn from '../../Button/ToggleBtn'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { CiHome } from "react-icons/ci";
import { AiOutlineFundView } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";



import { Link } from 'react-router-dom'
import MenuItem from './MenuItem';
import useAuth from '../../Hooks/UseAuth';


const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false)
 const {user} = useAuth()
 

  //   For guest/host menu item toggle button
  const toggleHandler = event => {
    setToggle(event.target.checked)
  }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          {/* <img className="w-[20%] md:w-[25%]" src="https://i.ibb.co/2KbSFkF/download-removebg-preview.png" alt="Website Logo" /> */}
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link to='/' className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
            {/* <img className="w-[20%] md:w-[25%]" src={user.photoURL} alt="Website Logo" /> */}
            </Link>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
           
            <nav>
            <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashBoard'
          />
            <MenuItem
            icon={AiFillFolderAdd}
            label='create new tasks'
            address='dashboard/createTask'
          />
            <MenuItem
            icon={AiOutlineFundView}
            label='View Task'
            address='dashboard/viewTask'
          />
            <MenuItem
            icon={AiOutlineUnorderedList}
            label='Task Lists'
            address='dashboard/manageTask'
          />
            <MenuItem
            icon={FcSettings}
            label=' manageTask'
            address='dashboard/TaskManage'
          />
    
            
            
            </nav>
          </div>
        </div>

        <div>
          <hr />

       
         <Link to='/'>
         <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-7Volunteer00 transition-colors duration-300 transform'>
            <CiHome className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </button></Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar