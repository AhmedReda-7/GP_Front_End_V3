import "./NewJournal.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function NewJournal() {
  const [journal, setjournal] = useState({
    jename: "",
    jedescription: "",
    jecredit: "",
    jedebit: "",
    jedate: "",
    jeaccount1: "",
    jeaccount2: "",
  });

  const handleInputChange = (e) => {
    const journalData = { ...journal };

    journalData[e.target.name] = e.target.value;

    setjournal(journalData);
  };

  async function sendData() {
    const journalData = { ...journal };

    const res = await axios.post(
      `https://localhost:44393/api/AddNewFmsJournalEntry`,
      journalData
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (journal.jedebit !== journal.jecredit) {
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Debit and Credit values must be equal",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }

    try {
      setjournal({
        jename: "",
        jedescription: "",
        jecredit: "",
        jedebit: "",
        jedate: "",
        jeaccount1: "",
        jeaccount2: "",
      });
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "New Journal is added",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Failed to add new Journal",
        showConfirmButton: false,
        timer: 3000,
      });
      setjournal((prevState) => ({
        ...prevState,
        jeaccount1: "",
        jeaccount2: "",
      }));
    }
    sendData();
  };
  
  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">New Journal</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Journal Name</label>
              <input
                type="text"
                name="jename"
                value={journal.jename}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                name="jedescription"
                value={journal.jedescription}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Credit</label>
              <input
                type="number"
                name="jecredit"
                value={journal.jecredit}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Debit</label>
              <input
                type="number"
                name="jedebit"
                value={journal.jedebit}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Credit Account</label>
              <input
                type="number"
                name="jeaccount1"
                value={journal.jeaccount1}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Debit Account</label>
              <input
                type="number"
                name="jeaccount2"
                value={journal.jeaccount2}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Date</label>
              <input
                type="date"
                name="jedate"
                value={journal.jedate}
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

export default NewJournal;