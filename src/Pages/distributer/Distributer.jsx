import "./distributer.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';



export default function Distributer() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "Distributer",
      headerName: "Distributer",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="DistributerListItem">
            <img className="DistributerListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          
          <div>
            <Link to={"/distributer/" + params.row.id}>
              <button className="DistributerListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="DistributerListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className="datatable">
      <div className="datatableTitle">
        Add New Distributer
        <Link to="/distributer/newDistributer" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid className="datagrid"
rows={data}
disableSelectionOnClick
columns={columns}
pageSize={8}
checkboxSelection
/>
    </div>
  </div>
  </div>
  );
}
