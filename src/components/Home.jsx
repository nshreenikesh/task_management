import Navbar from '../components/Navbar.jsx'
import Edit from '../components/Edit.jsx'


function Home({tableData, handleEdit, handleDelete}){
    
    return (
        <>
        <Navbar/>        
        <Edit tableData={tableData}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      />        
        </>
    )
}

export default Home