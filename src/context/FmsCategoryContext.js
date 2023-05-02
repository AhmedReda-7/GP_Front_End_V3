import { createContext, useState } from "react";

import axios from "axios";

const FmsCategoryContext = createContext();

export function FmsCategoryContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);

  async function getAllcategory() {
    const allcategory = await axios.get(
      `https://localhost:44393/api/FmsGetAllCategories`
    );

    setData(allcategory.data);
  }

  async function getCategoryById(id) {
    const categoryObject = await axios.get(
      `https://localhost:44393/api/FmsGetCategoryById/${id}`
    );

    setDetailData(categoryObject.data);
  }

  async function deleteCategory(id) {
    const deletedCategory = await axios.delete(
      `https://localhost:44393/api/FmsDeleteCategory?id=${id}`
    );
  }

  const handleDelete = (id) => {
    deleteCategory(id);

    getAllcategory();
  };

  async function updateCategory(id, updatedData) {
    const updatedCategory = await axios.put(
      `https://localhost:44393/api/FmsUpdateCategory/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateCategory(id, updatedData);

    getAllcategory();
  };

  const valuetoshare = {
    data,
    detailData,
    getAllcategory,
    handleDelete,
    handleupdate,
    getCategoryById,
  };
  return (
    <FmsCategoryContext.Provider value={valuetoshare}>
      {children}
    </FmsCategoryContext.Provider>
  );
}

export default FmsCategoryContext;
