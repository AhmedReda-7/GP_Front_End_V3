import { createContext, useState  } from 'react';
import axios  from 'axios';


const CategoryContext = createContext ();

export function CategoryContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllcategory()
    {
     const allcategory = await axios.get(`https://localhost:44393/api/GetAllCategories`);
     setData(allcategory.data);
    }
 async function getCategoryById(id)
 {
        const categoryObject = await axios.get(`https://localhost:44393/api/GetCategoryById/${id}`);
        return categoryObject ;
       
 }
 async function deleteCategory(id)
 {
        const deletedCategory = await axios.delete(`https://localhost:44393/api/DeleteCategory?id=${id}`);
       
 }
    const handleDelete = (id) => {
       deleteCategory(id);
getAllcategory();
       
        
      };
 async function updateCategory(id,updatedData)
 {
        const updatedCategory = await axios.put(`https://localhost:44393/api/UpdateCategory/${id}`,updatedData);
       
 }
    const handleupdate = (id,updatedData) => {
       updateCategory(id,updatedData);
       getAllcategory();
       
        
      };
    const valuetoshare = {data,getAllcategory,handleDelete,handleupdate,getCategoryById}  
    return <CategoryContext.Provider value={valuetoshare}>{children}</CategoryContext.Provider>
}



export default CategoryContext;
