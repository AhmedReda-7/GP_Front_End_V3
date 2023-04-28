import { createContext, useState  } from 'react';
import axios  from 'axios';


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
