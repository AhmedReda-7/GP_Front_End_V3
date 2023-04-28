import "./newmatrial.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import { useState } from "react";
import  axios  from 'axios';

function Newmatrial({ inputs, title }) {
  const [file, setFile] = useState("");
  const [rawmatrial,setRawmatrial] = useState({
    materialName: "",
    materialDescription: ""})
  const handleInputChange = (e) => {
    const rawmatrialData = {...rawmatrial}
    rawmatrialData[e.target.name]= e.target.value;
    setRawmatrial(rawmatrialData);


  }
  async function sendData ()
  {
    const rawmatrialData = {...rawmatrial ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewRawMaterial`,rawmatrialData)

// console.log('====================================');
// console.log(res);
// console.log('====================================');
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
 
    sendData();

  }
  return (
    <div className="newrawmatrial">
    <Sidebar />
    <div className="newContainer">
    <Navbar />
    <div className="top">
      <h1>{title}</h1>
    </div>
    <div className="bottom">
      <div className="left">
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt=""
        />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit} >
          

          {inputs.map((input) => (
            <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} name={input.name}  onChange={handleInputChange} placeholder={input.placeholder} />
            </div>
          ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
}
export default Newmatrial