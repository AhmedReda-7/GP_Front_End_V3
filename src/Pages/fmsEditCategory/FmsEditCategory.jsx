import "./FmsEditCategory.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import FmsCategoryContext from "../../context/FmsCategoryContext";

export default function EditCategory({logOut}) {
  const { catId } = useParams();

  const { handleupdate, getCategoryById } = useContext(FmsCategoryContext);

  const [catdata, setcatdata] = useState({
    catName: "",
    catDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(catId, catdata);
  };

  const handleChange = (e) => {
    const categoryData = { ...catdata };

    categoryData[e.target.name] = e.target.value;

    setcatdata(categoryData);
  };

  async function getCategory() {
    const category = await getCategoryById(catId);

    setcatdata(category.data);
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">Edit Category</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Category Name</label>
              <input
                type="text"
                name="catName"
                value={catdata.catName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                name="catDescription"
                value={catdata.catDescription}
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
