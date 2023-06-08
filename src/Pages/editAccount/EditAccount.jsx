import "./EditAccount.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import AccountContext from "../../context/AccountContext";


export default function EditAccount({logOut}) {
  const { accId } = useParams();

  const { handleupdate, getAccountById } = useContext(AccountContext);

  const [accdata, setaccdata] = useState({
    accName: "",
    increaseMode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(accId, accdata);
  };

  const handleChange = (e) => {
    const accountData = { ...accdata };

    accountData[e.target.name] = e.target.value;

    setaccdata(accountData);
  };

  async function getAccount() {
    const account = await getAccountById(accId);
    setaccdata(account.data);
  }

  useEffect(() => {
    getAccount();
  }, []);
  

  



  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">Edit Account</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Account Name</label>
              <input
                type="text"
                name="accName"
                value={accdata.accName}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Increase Mode</label>
              <div className="radio">
                <input
                  type="radio"
                  name="increaseMode"
                  id="Credit"
                  value="Credit"
                  onChange={handleChange}
                />
                <label htmlFor="Credit">Credit</label>
                <input
                  type="radio"
                  name="increaseMode"
                  value="Debit"
                  id="Debit"
                  onChange={handleChange}
                />
                <label htmlFor="Debit">Debit</label>
              </div>
            </div>
            <button type="submit" className="addProductButton">
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}