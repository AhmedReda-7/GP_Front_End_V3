import "./NewTemplate.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AccountContext from "../../context/AccountContext";

function NewTemplate() {

  const [template, settemplate] = useState({
    tempName: "",
    tempDate: "",
    accounts: [
      {
        accId: 0,
      },
    ],
  });

  const { data, getAllaccount } = useContext(AccountContext);
  useEffect(() =>{
    getAllaccount();
  }, [])

  const handleInputChange = (e) => {
    const templateData = { ...template };

    templateData[e.target.name] = e.target.value;
    settemplate(templateData);
  };
  const handleChange = (e, index) => {
    const { value } = e.target;
    const templateData = { ...template };
    templateData.accounts[index].accId = value;
    console.log(index)
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



  // console.log("######################")
  // console.log(template);

  const newtempOrderOptions = data?.map((temp) => {
    return (
      <option value={temp.accId} key={temp.accId}>
        Id: {temp.accId} -- Name: {temp.accName}
      </option>
    );
  });

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
            <div>
              {template.accounts.map((account, index) => (
                <div key={index}>
                  <div>
                    <label>Accounts</label>
                    <select
                      name="accId"
                      value={account.accId}
                      onChange={(e) => handleChange(e, index)}
                    >
                      {newtempOrderOptions}
                    </select>
                  </div>
                </div>
              ))}
            </div>
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTemplate;