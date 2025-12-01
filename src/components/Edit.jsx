import { FaPlus, FaSearch } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Edit({tableData, handleEdit, handleDelete}){

    const navigation=useNavigate()
    const handleSubmit=()=>{
        navigation("/create")
    }
    const handleEditClick = (index) => {
         handleEdit(index);     // fill form
         navigation("/create"); // open create page
        };
    const [searchText, setSearchText] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [filterPriority, setFilterPriority] = useState("");

    const filteredTasks = tableData.filter((task) => {
         const matchesSearch = task.name.toLowerCase().includes(searchText.toLowerCase());
         const matchesStatus = filterStatus === "" || task.status === filterStatus;
         const matchesPriority = filterPriority === "" || task.priority === filterPriority;

         return matchesSearch && matchesStatus && matchesPriority;
    });

    return (
        <>
        {/* title */}
        <div className="flex items-center justify-between gap-5 px-4 mt-10">
            <div>
                <h1 className="text-2xl font-bold">Task Control Panel</h1>
                <p className="text-gray-500 ">Keep your daily task organized and easy to Track</p>
            </div>
            <div>
                <button onClick={handleSubmit} className='px-2 py-2 text-xs md:px-4 md:py-2 bg-blue-500 md:text-[16px] text-white font-semibold  hover:bg-blue-700 rounded flex items-center gap-1'> <FaPlus/>Create New Task</button>
            </div>

        </div>

        {/* search */}

        <div className="flex items-center justify-between  gap-5 text-[9px] md:text-[16px] md:gap-16  py-5 px-5 md:mx-5 mt-10 bg-white shadow rounded">
            <div className="flex items-center relative w-full">
                <FaSearch className="absolute top-1 left-1 md:top-2 md:left-2 text-gray-400 text-[9px]  md:text-[16px]"/>
            <input value={searchText}
              onChange={(e) => setSearchText(e.target.value)} className="border w-full px-6 md:px-8 md:py-1 rounded focus:outline focus:border-blue-300" type="text" placeholder="Seacrch task..."/>
            </div>
            <select value={filterStatus}
               onChange={(e) => setFilterStatus(e.target.value)} className="border md:py-1 md:px-4 rounded focus:outline-none" name="" id="">
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <select value={filterPriority}
               onChange={(e) => setFilterPriority(e.target.value)} className="border md:py-1 md:px-4 rounded focus:outline-none" name="" id="">
                <option value="">All Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button onClick={() => {
              setSearchText("");
              setFilterStatus("");
              setFilterPriority("");
            }} className="border w-full md:px-2 md:py-1 rounded text-center hover:bg-gray-200">Clear Filters</button>
        </div>

        {/* table form */}
        <div className="md:mx-5 mt-10 bg-white shadow ">
        <table className="w-full border rounded">
            <thead>
                <tr className="bg-gray-50 ">
                    <th className="hover:bg-gray-200 p-2 text-xs md:text-[16px]">TITLE</th>
                    <th className="hover:bg-gray-200 p-2 text-xs md:text-[16px]">DESCRIPTION</th>
                    <th className="hover:bg-gray-200 p-2 text-xs md:text-[16px]">STATUS</th>
                    <th className="hover:bg-gray-200 p-2 text-xs md:text-[16px]">PRIORITY</th>
                    <th className="hover:bg-gray-200 p-2 text-xs md:text-[16px] ">ACTIONS</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                   filteredTasks.length === 0 && (
                    <tr>
                      <td colSpan="5" className="py-10 text-gray-400 text-center text-[10px] md:text-[16px]">
                        <div className="flex flex-col items-center justify-center text-gray-400">
                        <h1 className="text-xl md:text-5xl"><BiErrorCircle/></h1>
                         <h1 className="text-[10px] md:text-xl">No Tasks Found</h1>
                         <p className="md:mt-4">try adjusing your search or filters</p>
                       </div>
                      </td>
                      
                    </tr>
                  )
                }

                {
                filteredTasks.map((data, index)=>{
                    return (
                      <tr key={index}>
                        <td className="text-[10px] md:text-[16px] px-2" >{data.name} </td>
                        <td className="text-[10px] md:text-[16px] px-1" >{data.description} </td>
                        <td className="text-[10px] md:text-[16px] px-1" >{data.status} </td>
                        <td className="text-[10px] md:text-[16px] px-1" >{data.priority} </td>
                        <td className=" px-4 py-2"><button className="bg-blue-500 hover:bg-blue-600 text-white text-[9px] md:text-[16px] px-2 py-1 md:px-4 md:py-2 rounded"
                         onClick={()=>handleEditClick(index) }>Edit</button> 
                        <button className="ml-2  bg-red-500 hover:bg-red-600 text-white text-[9px] md:text-[16px] px-2 py-1 md:px-4 md:py-2 rounded" onClick={()=>handleDelete(index)}>Delete</button> </td>
                      </tr>
                    )
                  })}
            
            </tbody>
        </table>
        </div>

        </>
    )
}

export default Edit;