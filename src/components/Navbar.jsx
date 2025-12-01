import { FaHome, FaPlus } from "react-icons/fa";


import TaskLogo from '../assets/image/task-mgn-logo.png'
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigation=useNavigate()

    const handleSubmit=()=>{
        navigation("/create")
    }
    const handlehome=()=>{
        navigation("/home")
    }

    return (
        <>
        <div className='bg-white flex items-center justify-between px-2 md:px-6  shadow-lg'>
                    <div className='flex items-center'>
                    <img className='w-[70px] h-[70px] md:h-[80px] md:w-[80px]' src={TaskLogo} alt="" />
                   <h1 className='text-xl md:text-3xl font-bold'>Task Manager</h1>
                   </div>
                   <div className='flex items-center gap-5'>
                     <button onClick={handlehome}  className='px-2 py-1 md:px-4 font-semibold  md:text-[16px] md:py-2 hover:bg-gray-100 rounded flex items-center gap-1'><FaHome/> Home</button>
                     <button onClick={handleSubmit} className='px-2 py-2 text-xs md:px-4 md:py-2 bg-blue-500 md:text-[16px] text-white font-semibold  hover:bg-blue-700 rounded flex items-center gap-1'> <FaPlus/>Create Task</button>
                   </div>
                </div>
               
        </>
    )
}
export default Navbar;