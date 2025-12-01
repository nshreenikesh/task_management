import { FaArrowLeft } from "react-icons/fa";
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function Create({createData,handleFormDataChange,handleSubmit,handleResetForm, editIndex}){

    const navigator= useNavigate()
    const handleback=()=>{
        navigator("/home")
    }

    return (
        <>
        <Navbar/>

         <div className="mt-10">
            {/* title */}
            <div className="flex items-center  gap-2 md:gap-10 px-auto mx-10 md:mx-[20%]">
                <h1 onClick={handleback} className="hover:bg-gray-200 rounded-full p-2"><FaArrowLeft/> </h1>
                <div>
                    <h1 className="font-bold text-xs md:text-2xl">Create New Task</h1>
                    <p className="text-gray-500 text-xs">Add a new task to your management Hub</p>
                </div>
            </div>

            {/* form */}

            <div className="bg-white shadow-lg md:mx-[20%] mx-10 my-10 px-10 py-5 md:px-[5%] md:py-10 rounded">
                <form onSubmit={(e)=>{
                  handleSubmit(e)
                  navigator("/home")
                }}>
                    <label className="font-bold md:text-[18px] inline-block pb-2 md:pb-5 ">Task Title*</label>
                    <input onChange={(e)=>
            {
                const {value} = e.target
                handleFormDataChange("name", value)
                }}  required value={createData.name} 
                className="border rounded w-full p-2 mb-4 focus:outline focus:border-blue-500" type="text" placeholder="Enter task title"/><br />
                    <label className="font-bold md:text-[18px] inline-block pb-2 md:pb-5  ">Description*</label>
                    <textarea onChange={(e)=>
            {
                const {value} = e.target
                handleFormDataChange("description", value)
                }}  required value={createData.description} className="border rounded w-full p-2 md:p-4 mb-4 focus:outline focus:border-blue-500"  name="" id="" placeholder="Enter task description "></textarea><br />

                    <div className="flex items-center gap-10">
                      <div>
                        <label className="font-bold md:text-[16px] text-xs inline-block pb-5 ">Status*</label>
                        <select
                         onChange={(e) => {
                           const { value } = e.target;
                           handleFormDataChange("status", value);
                         }}
                         required
                         value={createData.status}
                         className="border rounded w-full p-1 text-xs md:text-[16px]"
                       >
                         <option value="">Select Status</option>
                         <option value="Pending">Pending</option>
                         <option value="In Progress">In Progress</option>
                         <option value="Completed">Completed</option>
                       </select>

                    </div>
                    <div>
                        <label className="font-bold md:text-[16px] text-xs inline-block pb-5 ">Priority*</label>
                        <select
                          onChange={(e) => {
                            const { value } = e.target;
                            handleFormDataChange("priority", value);
                          }}
                          required
                          value={createData.priority}
                          className="border rounded w-full p-1 text-xs md:text-[16px]"
                        >
                          <option value="">Select Priority</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>

                    </div>
                    </div>
                <div className="flex items-center gap-5 mt-10 border-t-2 pt-4">
                    <button type="submit"  className="px-2 py-1 md:py-2 md:px-4 text-xs md:text-[16px] text-white font-semibold bg-blue-500 hover:bg-blue-600  rounded">{editIndex === null? "Create Task": "Update"}</button>
                    <button type="button" onClick={handleback} className="py-2 px-4 md:text-[16px] text-xs bg-gray-300 hover:bg-gray-400 rounded font-semibold">Cancel</button>
                    <button type="reset" onClick={handleResetForm} className="py-2 px-4 md:text-[16px] text-xs bg-gray-300 hover:bg-gray-400 rounded font-semibold">Reset Form</button>
                </div>
                </form>

            </div>


         </div>
        </>
    )
}


export default Create;