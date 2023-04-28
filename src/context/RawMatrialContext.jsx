import { createContext, useState  } from 'react';
import axios  from 'axios';


const RawMatrialContext = createContext ();

export function RawMatrialContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllRawMatrial()
    {
     const allRawMatrial = await axios.get(`https://localhost:44393/api/GetAllRawMaterials`);
     setData(allRawMatrial.data);
    }
    async function getRawmatrialById(id)
    {
           const rawmatrialObject = await axios.get(`https://localhost:44393/api/GetRawMaterialById/${id}`);
           return rawmatrialObject ;
          
    }
 async function deleteRawMatrial(id)
 {
        const deletedRawMatrial = await axios.delete(`https://localhost:44393/api/DeleteRawMaterial?id=${id}`);
       
 }
    const handleDelete = (id) => {
       deleteRawMatrial(id);
getAllRawMatrial();
       
        
      };
      async function updateRawmatrial(id,updatedData)
 {
        const updatedCategory = await axios.put(`https://localhost:44393/api/UpdateRawMaterial/${id}`,updatedData);
       
 }
    const handleupdate = (id,updatedData) => {
       updateRawmatrial(id,updatedData);
       getAllRawMatrial();
       
        
      };
 
    const valuetoshare = {data,getAllRawMatrial,handleDelete,handleupdate,getRawmatrialById}  
    return <RawMatrialContext.Provider value={valuetoshare}>{children}</RawMatrialContext.Provider>
}



export default RawMatrialContext;
