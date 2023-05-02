import { createContext, useState  } from 'react';
import axios  from 'axios';

import Swal from 'sweetalert2';

const AllproductContext = createContext ();

export function AllproductContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllproduct()
    {
     const allproduct = await axios.get(`https://localhost:44393/api/GetAllProducts`);
     setData(allproduct.data);
    }
    async function getProductById(id)
    {
           const productObject = await axios.get(`https://localhost:44393/api/GetProductById/${id}`);
           return productObject ;
          
    }
 async function deleteproduct(id)
 {
        const deletedproduct = await axios.delete(`https://localhost:44393/api/DeleteProduct?id=${id}`);
       
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
       deleteproduct(id);
         getAllproduct();
       
        
      };
      async function updateProduct(id,updatedData)
      {
             const updatedProduct = await axios.put(`https://localhost:44393/api/UpdateProduct/${id}`,updatedData);
            
      }
         const handleupdate = (id,updatedData) => {
            updateProduct(id,updatedData);
            getAllproduct();
            
             
           };

    const valuetoshare = {data,getAllproduct,handleDelete,handleupdate,getProductById}  
    return <AllproductContext.Provider value={valuetoshare}>{children}</AllproductContext.Provider>
}



export default AllproductContext;
