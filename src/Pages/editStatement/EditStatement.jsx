import "./EditStatement.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import StatementContext from "../../context/StatementContext";


export default function EditStatement() {
  const { staId } = useParams();

  const { handleupdate, getStatementById } = useContext(StatementContext);

  const [stadata, setstadata] = useState({
    staName: "",
    staBalance: "",
    staDate: "",
    accounts:[]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(staId, stadata);
  };

  const handleChange = (e) => {
    const statementData = { ...stadata };

    statementData[e.target.name] = e.target.value;

    setstadata(statementData);
  };

  async function getStatement() {
    const statement = await getStatementById(staId);

    setstadata(statement.data);
  }

  useEffect(() => {
    getStatement();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">Edit Statement</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Statement Name</label>
              <input
                type="text"
                name="staName"
                value={stadata.staName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Statement Balance</label>
              <input
                type="number"
                name="staBalance"
                value={stadata.staBalance}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Statement Date</label>
              <input
                type="date"
                name="staDate"
                value={stadata.staDate}
                onChange={handleChange}
                placeholder=""
              />
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
