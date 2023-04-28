import { Link } from "react-router-dom";
import "./editdistributer.css";
import Charts from "../../Components/Chart/Charts";

import PublishIcon from '@mui/icons-material/Publish';
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';

export default function EditDistributer() {
  return (
    <div className="list">
   <Sidebar/>
    <div className="listContainer">
     <Navbar/>
    <div className="Distributer">
      <div className="DistributerTitleContainer">
        <h1 className="DistributerTitle">Distributer</h1>
        <Link to="/distributer/newDistributer">
          <button className="DistributerAddButton">Create</button>
        </Link>
      </div>
      <div className="DistributerTop">
          <div className="DistributerTopLeft">
          <Charts title="Sales Performance" aspect={4/1}/>
          </div>
          <div className="DistributerTopRight">
              <div className="DistributerInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="DistributerInfoImg" />
                  <span className="DistributerName">Apple Airpods</span>
              </div>
              <div className="DistributerInfoBottom">
                  <div className="DistributerInfoItem">
                      <span className="DistributerInfoKey">id:</span>
                      <span className="DistributerInfoValue">123</span>
                  </div>
                  <div className="DistributerInfoItem">
                      <span className="DistributerInfoKey">sales:</span>
                      <span className="DistributerInfoValue">5123</span>
                  </div>
                  <div className="DistributerInfoItem">
                      <span className="DistributerInfoKey">active:</span>
                      <span className="DistributerInfoValue">yes</span>
                  </div>
                  <div className="DistributerInfoItem">
                      <span className="DistributerInfoKey">in stock:</span>
                      <span className="DistributerInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="DistributerBottom">
          <form className="DistributerForm">
              <div className="DistributerFormLeft">
                  <label>Distributer Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="DistributerFormRight">
                  <div className="DistributerUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="DistributerUploadImg" />
                      <label for="file">
                          <PublishIcon/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="DistributerButton">Update</button>
              </div>
          </form>
      </div>
    </div>
    </div>
    </div>
  );
}
