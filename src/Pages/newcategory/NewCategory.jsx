import "./newcategory.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import { useState } from "react";
import  axios  from 'axios';

function NewCategory({ inputs, title }) {
  const [file, setFile] = useState("");
  const [category,setCategory] = useState({
 categoryName: "",
  categoryDescription: ""})
  const handleInputChange = (e) => {
    const categoryData = {...category}
    categoryData[e.target.name]= e.target.value;
    setCategory(categoryData);


  }
  async function sendData ()
  {
    const categoryData = {...category ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewCategory`,categoryData)

// console.log('====================================');
// console.log(res);
// console.log('====================================');
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
 
    sendData();

  }
  return (
    <div className="newcategory">
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
export default NewCategory