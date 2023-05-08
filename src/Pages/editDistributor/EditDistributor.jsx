import "./EditDistributor.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import DistributorContext from "../../context/DistributorContext";

export default function EditDistributor() {
  const { distributorId } = useParams();

  const { handleupdate, getDistributorById } = useContext(DistributorContext);

  const [distdata, setdistdata] = useState({
    distributorName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(distributorId, distdata);
  };

  const handleChange = (e) => {
    const distData = { ...distdata };

    distData[e.target.name] = e.target.value;

    setdistdata(distData);
  };

  async function getdist() {
    const dist = await getDistributorById(distributorId);
    setdistdata(dist.data);
  }

  useEffect(() => {
    getdist();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">Edit Distributor</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Distributor Name</label>
              <input
                type="text"
                name="distributorName"
                value={distdata.distributorName}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Phone Number</label>
              <input
                type="int"
                name="phoneNumber"
                value={distdata.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={distdata.email}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>address</label>
              <input
                type="address"
                name="Address"
                value={distdata.Address}
                onChange={handleChange}
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
