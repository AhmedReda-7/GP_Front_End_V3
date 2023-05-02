import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const RawMatrialInventoryContext = createContext ();

export function RawMatrialInventoryContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllRawMatrialInventory()
    {
     const allRawMatrialInventory = await axios.get(`https://localhost:44393/api/GetAllRawMaterialsInventory`);
     setData(allRawMatrialInventory.data);
    }
    async function getRawMatrialInventoryById(id)
    {
           const rawmatrialinventoryObject = await axios.get(`https://localhost:44393/api/GetRawMaterialInventoryById/${id}`);
           return rawmatrialinventoryObject ;
          
    }
 async function deleteRawMatrialInventory(id)
 {
        const deletedRawMatrialInventory = await axios.delete(`https://localhost:44393/api/DeleteRawMaterialFromInventory/${id}`);
       
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
       deleteRawMatrialInventory(id);
getAllRawMatrialInventory();
       
        
      };
 
      async function updateRawmatrialInventory(updatedData)
      {
             const updateRawmatrialInventory = await axios.put(`https://localhost:44393/api/UpdateRawMaterialInInventory`,updatedData);
            
      }
         const handleupdate = (updatedData) => {
            updateRawmatrialInventory(updatedData);
            getAllRawMatrialInventory();
            
             
           };

    const valuetoshare = {data,getAllRawMatrialInventory,handleDelete,handleupdate,getRawMatrialInventoryById}  
    return <RawMatrialInventoryContext.Provider value={valuetoshare}>{children}</RawMatrialInventoryContext.Provider>
}



export default RawMatrialInventoryContext;
