import { createContext, useState } from "react";

import axios from "axios";

const DistributorContext = createContext();

export function DistributorContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [productData, setproductData] = useState([]);

  async function getAlldistributor() {
    const alldistributor = await axios.get(
      `https://localhost:44393/api/GetAllDistributors`
    );

    setData(alldistributor.data);
  }

  async function getDistributorById(id) {
    const distributorObject = await axios.get(
      `https://localhost:44393/api/GetDirstributorById/${id}`
    );

    setDetailData(distributorObject.data);
  }

  async function deleteDistributor(id) {
    const deleteddistributor = await axios.delete(
      `https://localhost:44393/api/DeleteDistributor?id=${id}`
    );
  }

  const handleDelete = (id) => {
    deleteDistributor(id);

    getAlldistributor();
  };

  async function updateDistributor(id, updatedData) {
    const updateddistributor = await axios.put(
      `https://localhost:44393/api/UpdateDistributor/${id}`,
      updatedData
    );
  }
  async function getDistributorProduct() {
    const DistributorProduct = await axios.get(
      `https://localhost:44393/api/GetAllProducts`
    );
    setproductData(DistributorProduct.data);
  }

  const handleupdate = (id, updatedData) => {
    updateDistributor(id, updatedData);

    getAlldistributor();
  };

  const valuetoshare = {
    data,
    detailData,
    productData,
    getAlldistributor,
    handleDelete,
    handleupdate,
    getDistributorById,
    getDistributorProduct,
  };
  return (
    <DistributorContext.Provider value={valuetoshare}>
      {children}
    </DistributorContext.Provider>
  );
}

export default DistributorContext;
