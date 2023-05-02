import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const SupplierContext = createContext ();

export function SupplierContextProvider({children})
{
    const [data, setData] = useState([]);
    const [rowInputs, setrowInputs] = useState({ materialId: "", pricePerUnit: "" });

    async function getAllsupplier()
    {
     const allsupplier = await axios.get(`https://localhost:44393/api/GetAllSuppliers`);
     setData(allsupplier.data);
    }
    async function getSupllierById(id)
    {
           const supplierObject = await axios.get(`https://localhost:44393/api/GetSupplierById/${id}`);
           return supplierObject ;
          
    }
    async function getSuplliermatrialById(id)
    {
           const sppmatrial = await axios.get(`https://localhost:44393/api/GetSuppliersMaterials/${id}`)
           return sppmatrial ;
          
    }
 async function deletesupplier(id)
 {
        const deletesupplier = await axios.delete(`https://localhost:44393/api/DeleteSupplier?id=${id}`);
       
 }
    const handleDelete = (id) => {

       Swal.fire({
              icon: 'warning',
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
          }).then(result => {
              if (result.value) {
                  const [employee] = data.filter(employee => employee.id === id);
  
                  Swal.fire({
                      icon: 'success',
                      title: 'Deleted!',
                      text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                      showConfirmButton: false,
                      timer: 2000,
                  });
              }
       });
        deletesupplier(id);
         getAllsupplier();
       
          

      };
      async function updateSupplier(id,updatedData)
      {
             const updateSupplier = await axios.put(`https://localhost:44393/api/UpdateSupplier/${id}`,updatedData);
            
      }
         const handleupdate = (id,updatedData) => {
            updateSupplier(id,updatedData);
            getAllsupplier();
            
             
           };

    const valuetoshare = {data,getAllsupplier,handleDelete,handleupdate,getSupllierById,getSuplliermatrialById}  
    return <SupplierContext.Provider value={valuetoshare}>{children}</SupplierContext.Provider>
}



export default SupplierContext;
