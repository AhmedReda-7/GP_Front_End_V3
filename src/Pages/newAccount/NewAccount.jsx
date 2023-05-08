import "./NewAccount.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";


function NewAccount() {

  const [account, setaccount] = useState({
    accName: "",
    increaseMode: "",
  });

  const handleInputChange = (e) => {
    const accountData = { ...account };

    accountData[e.target.name] = e.target.value;

    setaccount(accountData);
  };

  async function sendData() {
    const accountData = { ...account };

    const res = await axios.post(
      `https://localhost:44393/api/FmsAddAccount`,
      accountData
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
          <h1 className="addProductTitle">New Account</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Account Name</label>
              <input
                type="text"
                name="accName"
                value={account.accName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>increase Mode</label>
              <div className="radio">
                <input
                  type="radio"
                  name="increaseMode"
                  id="Credit"
                  value="Credit"
                  onChange={handleInputChange}
                  placeholder=""
                />
                <label htmlFor="Credit">Credit</label>
                <input
                  type="radio"
                  name="increaseMode"
                  value="Debit"
                  id="Debit"
                  onChange={handleInputChange}
                  placeholder=""
                />
                <label htmlFor="Debit">Debit</label>
              </div>
            </div>
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewAccount;