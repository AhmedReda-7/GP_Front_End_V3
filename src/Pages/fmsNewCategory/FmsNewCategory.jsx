import "./FmsNewCategory.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";

function FmsNewCategory() {
  const [category, setcategory] = useState({
    catName: "",
    catDescription: "",
  });

  const handleInputChange = (e) => {
    const categoryData = { ...category };

    categoryData[e.target.name] = e.target.value;

    setcategory(categoryData);
  };

  async function sendData() {
    const categoryData = { ...category };

    const res = await axios.post(
      `https://localhost:44393/api/FmsAddCategory`,
      categoryData
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
          <h1 className="addProductTitle">New category</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Category Name</label>
              <input
                type="text"
                name="catName"
                value={category.catName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                name="catDescription"
                value={category.catDescription}
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

export default FmsNewCategory;