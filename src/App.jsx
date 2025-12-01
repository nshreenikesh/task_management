import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'
import Edit from './components/Edit.jsx'
import Navbar from './components/Navbar.jsx'

import {BrowserRouter, Router, Route, Routes, Navigate} from "react-router-dom"





function App() {
   
  const initialCreateData ={
    name: "",
    description:"",
    status:"",
    priority:""
  }
  const [createData, setCreateData] = useState(initialCreateData)
  const [tableData, setTableData] = useState([])
  const [editIndex, setEditIndex] = useState(null)

    const handleFormDataChange = (key,value)=>{
  //  console.log({key, value});

   setCreateData ({
    ...createData,
    [key]:value,
   })
  }

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      if(editIndex===null){
        setTableData([...tableData,createData])
        setCreateData(initialCreateData)
      console.log("form submit", createData);
      }else{
        tableData[editIndex]=createData;
        setTableData(tableData)
        setCreateData(initialCreateData);
        setEditIndex(null)
      }

  }

  const handleEdit =(index)=>{
  console.log("which index", index)
  const clickedItem=tableData[index]
  setCreateData(clickedItem)
  setEditIndex(index) 
  }

  const handleDelete =(index)=>{
        tableData.splice(index, 1);

        setTableData([...tableData])
  }

  const handleResetForm = () => {
  setCreateData(initialCreateData);
  setEditIndex(null);
};

//search Filters

const [searchText, setSearchText] = useState("");
const [filterStatus, setFilterStatus] = useState("");
const [filterPriority, setFilterPriority] = useState("");

const filteredTableData = tableData.filter((task) => {
  const matchesSearch = task.name.toLowerCase().includes(searchText.toLowerCase());
  const matchesStatus = filterStatus === "" || task.status === filterStatus;
  const matchesPriority = filterPriority === "" || task.priority === filterPriority;

  return matchesSearch && matchesStatus && matchesPriority;
});


  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home tableData={tableData}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      />} ></Route>

        <Route path='/create' element={<Create handleFormDataChange={handleFormDataChange} createData={createData} handleResetForm={handleResetForm} handleSubmit={handleSubmit} editIndex={editIndex} />} ></Route>


        <Route path='*' element={<Navigate to="/home"/>} ></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App