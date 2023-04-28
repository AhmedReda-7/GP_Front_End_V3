import "./newproductinventory.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import  axios  from 'axios';
import { useState } from "react";

export default function NewProductinventoryinventory({ inputs, title }) {
  const [file, setFile] = useState("");
  const [newdatainventory,setNewdatainventory] = useState({
    productId: 0,
  quantity: 0,
  shippingDate: "2023-02-28T20:41:51.727Z",
  monthlyCosts: 0,
  area: "string",
  reorderingPoint: 0
  })
  const handleInputChange = (e) => {
    const newData = {...newdatainventory}
    newData[e.target.name]= e.target.value;
    setNewdatainventory(newData);


  }
  async function sendData ()
  {
    const newDataInventory = {...newdatainventory ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddAProductToInventory`,newDataInventory)

// console.log('====================================');
// console.log(res);
// console.log('====================================');
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
 
    sendData();

  }
  return (
    <div className="NewProductinventory">
    <Sidebar />
    <div className="newproductContainer">
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
