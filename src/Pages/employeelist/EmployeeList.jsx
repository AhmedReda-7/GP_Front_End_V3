import "./employeelist.scss"
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import Datatable from '../../Components/datatable/Datatable';


const EmployeeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
         <Datatable/>
      </div>
    </div>
  )
}

export default EmployeeList