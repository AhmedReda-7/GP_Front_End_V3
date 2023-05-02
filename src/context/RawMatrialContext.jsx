import { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const RawMatrialContext = createContext();

export function RawMatrialContextProvider({ children }) {
  const [data, setData] = useState([]);
  async function getAllRawMatrial() {
    const allRawMatrial = await axios.get(
      `https://localhost:44393/api/GetAllRawMaterials`
    );
    setData(allRawMatrial.data);
  }
  async function getRawmatrialById(id) {
    const rawmatrialObject = await axios.get(
      `https://localhost:44393/api/GetRawMaterialById/${id}`
    );
    return rawmatrialObject;
  }
  async function deleteRawMatrial(id) {
    const deletedRawMatrial = await axios.delete(
      `https://localhost:44393/api/DeleteRawMaterial?id=${id}`
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = data.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 2000,
        });
       
      }
      deleteRawMatrial(id);
      getAllRawMatrial();
    });
  };
  async function updateRawmatrial(id, updatedData) {
    const updatedCategory = await axios.put(
      `https://localhost:44393/api/UpdateRawMaterial/${id}`,
      updatedData
    );
  }
  const handleupdate = (id, updatedData) => {
    updateRawmatrial(id, updatedData);
    getAllRawMatrial();
  };

  const valuetoshare = {
    data,
    getAllRawMatrial,
    handleDelete,
    handleupdate,
    getRawmatrialById,
  };
  return (
    <RawMatrialContext.Provider value={valuetoshare}>
      {children}
    </RawMatrialContext.Provider>
  );
}

export default RawMatrialContext;
