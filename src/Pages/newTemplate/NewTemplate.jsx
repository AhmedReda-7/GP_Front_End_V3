import "./NewTemplate.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";

function NewTemplate() {
  const [template, settemplate] = useState({
    tempName: "",
    tempDate: "",
    Accounts: "4",
  });

  const handleInputChange = (e) => {
    const templateData = { ...template };

    templateData[e.target.name] = e.target.value;

    settemplate(templateData);
  };

  async function sendData() {
    const templateData = { ...template };

    const res = await axios.post(
      `https://localhost:44393/api/FmsAddtemplate`,
      templateData
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
  };

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">New Template</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Template Name</label>
              <input
                type="text"
                name="tempName"
                value={template.tempName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Template Date</label>
              <input
                type="date"
                name="tempDate"
                value={template.tempDate}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTemplate;