import { Link ,useParams} from "react-router-dom";
import { useContext ,useEffect,useState} from 'react';
import EmployeeContext from "../../context/employee";
import "./employeeview.scss";
import Navbar from './../../Components/navbar/Navbar';
import Sidebar from './../../Components/sidebar/Sidebar';


export default function EmployeeView() {
  const {employeeId} = useParams(); 
  const {getEmployeeById} = useContext (EmployeeContext);
  const [empdata,setEmpdata] = useState({
    employeeFullName: "",
    taxWithholding: 0,
    hoursWorked: 0,
    dateOfJoining: "2023-03-23T22:05:35.637Z",
    attendenceTime: "2023-03-23T22:05:35.637Z",
    holidays: "2023-03-23T22:05:35.637Z",
    employeeSalary: 0,
    employeeId: 0
  });


async function getemployee ()
{


 const employee = await getEmployeeById(employeeId);
 console.log('====================================');
 console.log(employee);
 console.log('====================================');
 setEmpdata(employee.data);

} 


useEffect(() => {
  
  getemployee();
   
 
 },[])
return (
  <div className="list">
 <Sidebar/>
  <div className="listContainer">
   <Navbar/>
  <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Employee</h1>
      <Link to="/employee/new">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
        
    <div className="productTopRight">
    <div className="productInfoTop">
    
        <p className="categoryName"><span className="spanform">employeeFullName:  </span>{empdata.employeeFullName}</p>

        <p className="paddorder"><span className="spanform">taxWithholding:  </span>{empdata.taxWithholding}</p>
        <p className="paddorder"><span className="spanform">hoursWorked:  </span>{empdata.hoursWorked}</p>
        <p className="paddorder"><span className="spanform">dateOfJoining:  </span>{empdata.dateOfJoining}</p>
        <p className="paddorder"><span className="spanform">attendenceTime:  </span>{empdata.attendenceTime}</p>
        <p className="paddorder"><span className="spanform">holidays:  </span>{empdata.holidays}</p>
        <p className="paddorder"><span className="spanform">employeeSalary:  </span>{empdata.employeeSalary}</p>
        <p className="paddorder"><span className="spanform">employeeId:  </span>{empdata.employeeId}</p>
    </div>
 
</div>
    </div>
   
  </div>
  </div>
  </div>
);
}
