import "./ViewTemplate.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { templateCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import TemplateContext from "../../context/TemplateContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ViewTemplate() {
  const { detailData, getTemplateById, handleDelete } =
    useContext(TemplateContext);

  const { tempId } = useParams();
  const [data, setData] = useState({
    tempId: tempId,
    tempName: detailData.tempName,
    tempDate: detailData.tempDate,
  });

  useEffect(() => {
    getTemplateById(tempId);
  }, [tempId]);

  const columnsaccount = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/template/" + params.row.tempId}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.tempId)}
            />
          </div>
        );
      },
    },
  ];




  const [Template, setTemplate] = useState({
    accId: "",
    tempId: tempId,
  });
  const [AccountCategories, setAccountCategories] = useState([]);

  const handleInputChange = (e) => {
    const TemplateData = { ...Template };

    TemplateData[e.target.name] = e.target.value;

    setTemplate(TemplateData);
  };

  async function sendData() {
    const TemplateData = { ...Template };
    
    const res = await axios.post(
      `https://localhost:44393/api/FmsAddTemplateAccount?tempID=${tempId}&accID=${Template.accId}`,
      TemplateData
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
  };

  async function getAllAccountCategories() {
    const accountObject = await axios.get(
      `https://localhost:44393/api/FmsGetTemplateAccounts?tempID=${tempId}`
    );

    setAccountCategories(accountObject.data);
  }

  useEffect(() => {
    getAllAccountCategories();
  }, []);


  async function addStatement() {
    const state = await axios.post(
      `https://localhost:44393/api/FmsAddStatement?templateID=${tempId}`
    );
  }


  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable1">
        <div className="row">
          <button onClick={addStatement}>Add New Statement</button>
          </div>
          <br />
          <div className="datatableTitle">
            Template Name: {data.tempName}
            <br />
            Template Id: {data.tempId}
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.tempId}
            rows={[data]}
            columns={templateCoulm.concat(columnsaccount)}
            pageSize={1}
            rowsPerPageOptions={[1]}
            disableSelectionOnClick
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <h1 className="addProductTitle">New Template</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Account Id</label>
              <input
                type="number"
                name="accId"
                value={Template.accId}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <button className="addProductButton">Add Account</button>
          </form>
        </div>
        <div className="catdev">
          <h2>
            this Template is Listed in {AccountCategories.length} Accounts :
          </h2>
          {AccountCategories.map((Template) => (
            <div className="AccountStatement">
              <h3>Account Id: {Template.accId}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
