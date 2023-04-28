import { createContext, useState  } from 'react';
import axios  from 'axios';


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
