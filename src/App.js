import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";

import { useContext } from "react";
import {supplierMaterialInputs, supplierorderInputs,supplierInputs,categoryInputs, userInputs ,productInputs,productinventoryInputs,rawmatrialInputs,rawmatrialinventoryInputs,manufacturInputs} from './formSource';

import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/newProduct/NewProduct';
import Overviewofsales from './Pages/overviewforsales/Overviewofsales'
// import Daily from './Pages/dailyofsales/Daily'
// import Monthly from "./Pages/monthyofsales/Monthly";

import EmployeeList from "./Pages/employeelist/EmployeeList";
import ProductinventoryList from './Pages/productsinventorylist/ProductinventoryList'; 
import Productinventory from './Pages/productinventory/Productinventory'; 
import NewProductinventory from './Pages/newproductinventory/NewProductinventory.jsx'; 
import CategoryList from "./Pages/categorylist/CategoryList.jsx";
import NewCategory from "./Pages/newcategory/NewCategory";
import Category from './Pages/category/Category';
import RawMatrialList from './Pages/rawmatrialList/RawMatrialList'
import Newmatrial from './Pages/newmatrial/Newmatrial';
import RawMatrial from './Pages/rawmatrial/RawMatrial.jsx';
import RawMatrialInventoryList from './Pages/rawmatrialinventorylist/RawMatrialInventoryList.jsx';
import RawMatrialinventory from './Pages/rawmatrialinventory/RawMatrialinventory';
import NewmatrialInventory from './Pages/newmatrialinventory/NewmatrialInventory.jsx';
import ManufacturList from './Pages/ManufacturList/ManufacturList';
import NewSupplierMatrial from './Pages/NewSupplierMatrial/NewSupplierMatrial.jsx';
import NewSupplierorder from './Pages/NewSupplierorder/NewSupplierorder';
import SupplierList from './Pages/supplier/SupplierList';
import Supplier from './Pages/supplieredit/Supplier';
import SupplierView from './Pages/SupplierView/SupplierView';
import NewSupplier from './Pages/NewSupplier/NewSupplier';
import SupplierordersList from './Pages/supplierorderlist/SupplierordersList';
import { EmployeeContextProvider } from "./context/employee";
import { CategoryContextProvider } from "./context/CategoryContext";
import { AllproductContextProvider } from './context/AllproductContext';
import { ProductInventoryContextProvider } from "./context/ProductInventoryContext";
import { RawMatrialContextProvider } from "./context/RawMatrialContext";
import { RawMatrialInventoryContextProvider } from "./context/RawMatrialInventoryContext";
import { ManufactoringContextProvider } from "./context/ManufactoringContext";
import { SupplierorderContextProvider } from "./context/SupplierorderContext.jsx";
import NewManufactur from './Pages/newmanufactur/NewManufactur';
import EmployeeView from './Pages/employeeview/EmployeeView';
import ManufactureView from "./Pages/ManufctureOrder/ManufactureView";
import { SupplierContextProvider } from './context/SupplierContext';
import SupplyOrderView from './Pages/supporderview/SupplyOrderView';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRout from './Pages/ProtectedRout/ProtectedRout.jsx';
import NotvalidScm from './Pages/ProtectedRout/NotvalidScm';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

import axios  from 'axios';


axios.interceptors.request.use(function (config) {
    
const token  = localStorage.getItem("token");
config.headers.Authorization = `Bearer ${token}`;
return config;
}, function (error) {
 
  return Promise.reject(error);
});








function App() {
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    if(localStorage.getItem('token') !== null)
    {
      saveUserData();
    }
  }, []);

  const [userData, setuserData] = useState(null);
  const [userEmail, setuserEmail] = useState(null);

  function saveUserData()

  {
    let encodedToken = localStorage.getItem('token');
    let email = localStorage.getItem('email');
   let decodedToken =  jwtDecode(encodedToken);
   console.log(decodedToken);
   setuserData(decodedToken);
   setuserEmail(email);
  }

  function logOut()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setuserEmail(null);
    setuserData(null);
    return <Navigate to='/'/>

  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <EmployeeContextProvider>
    <CategoryContextProvider>
    <AllproductContextProvider>
    <ProductInventoryContextProvider>
    <RawMatrialContextProvider>
    <RawMatrialInventoryContextProvider>
    <ManufactoringContextProvider>
    <SupplierContextProvider>
    <SupplierorderContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index  element={<Login  saveUserData={saveUserData} />} />
            <Route path="home" element={<ProtectedRout userdata={userData}><Home logOut={logOut}/></ProtectedRout>} />
            <Route path="overview" element={<ProtectedRout userdata={userData}><Overviewofsales  title="Overview of General Revenue and Profit" title2="Breakdown of Sales By Category" /></ProtectedRout>} />
            <Route path="error" element={<ProtectedRout userdata={userData}><ErrorPage logOut={logOut} /></ProtectedRout>} />
            
            <Route path="employee">
              <Route index element={<ProtectedRout userdata={userData}><NotvalidScm userEmail={userEmail}><EmployeeList /></NotvalidScm></ProtectedRout>} />
              <Route path=":employeeId" element={<ProtectedRout userdata={userData}><NotvalidScm userEmail={userEmail}><Single /></NotvalidScm></ProtectedRout>} />
              <Route path="view/:employeeId" element={<ProtectedRout userdata={userData}><NotvalidScm userEmail={userEmail}><EmployeeView /></NotvalidScm></ProtectedRout>} />
              <Route path="new" element={<ProtectedRout userdata={userData}><NotvalidScm userEmail={userEmail}><New  inputs={userInputs} title="Add New Emloyee"/></NotvalidScm></ProtectedRout>} />
            </Route>
            
          

            <Route path="products">
            <Route index element={<ProtectedRout userdata={userData}><ProductList/></ProtectedRout>}/>
            <Route path=":productId" element={<ProtectedRout userdata={userData}><Product/></ProtectedRout>}/>
            <Route path="newproduct" element={<ProtectedRout userdata={userData}><NewProduct inputs={productInputs} title="Add New Product"/></ProtectedRout>}/>
            </Route>

            <Route path="productsinventory">
            <Route index element={<ProtectedRout userdata={userData}> <NotvalidScm userEmail={userEmail}> <ProductinventoryList /></NotvalidScm> </ProtectedRout>}/>
            <Route path=":productinventoryId" element={<ProtectedRout userdata={userData}> <NotvalidScm userEmail={userEmail}><Productinventory/></NotvalidScm> </ProtectedRout>}/>
            <Route path="newproductinventory" element={<ProtectedRout userdata={userData}>  <NotvalidScm userEmail={userEmail}> <NewProductinventory inputs={productinventoryInputs} title="Add New Product To Inventory"/></NotvalidScm></ProtectedRout>}/>
            </Route>

            <Route path="category">
            <Route index element={<ProtectedRout userdata={userData}><CategoryList /></ProtectedRout>}/>
            <Route path=":categoryId" element={<ProtectedRout userdata={userData}><Category/></ProtectedRout>}/>
            <Route path="newcategory" element={<ProtectedRout userdata={userData}><NewCategory inputs={categoryInputs} title="Add New Category"/></ProtectedRout>}/>
            </Route>

            <Route path="rawmatrial">
            <Route index element={<ProtectedRout userdata={userData}><RawMatrialList /></ProtectedRout>}/>
            <Route path=":materialId" element={<ProtectedRout userdata={userData}><RawMatrial /></ProtectedRout>}/>
            <Route path="newrawmatrial" element={<ProtectedRout userdata={userData}><Newmatrial inputs={rawmatrialInputs} title="Add New Raw Material"/></ProtectedRout>}/>
            </Route>

            <Route path="rawmatrialinventory">
            <Route index element={<ProtectedRout userdata={userData}><NotvalidScm userEmail={userEmail}><RawMatrialInventoryList /></NotvalidScm></ProtectedRout>}/>
            <Route path=":rawmatrialinventoryId" element={<ProtectedRout userdata={userData}> <NotvalidScm userEmail={userEmail}><RawMatrialinventory /></NotvalidScm> </ProtectedRout>}/>
            <Route path="newrawmatrialinventory" element={<ProtectedRout userdata={userData}><NotvalidScm userEmail={userEmail}><NewmatrialInventory inputs={rawmatrialinventoryInputs} title="Add New Raw Material Inventory"/></NotvalidScm></ProtectedRout>}/>
            </Route>

            <Route path="manufactur">
            <Route index element={<ProtectedRout userdata={userData}><ManufacturList  /></ProtectedRout>}/>
            <Route path="view/:manufacturId" element={<ProtectedRout userdata={userData}><ManufactureView /></ProtectedRout>}/>
            <Route path="newmanufactur" element={<ProtectedRout userdata={userData}><NewManufactur inputs={manufacturInputs} title="Add New Manufacturing  "/></ProtectedRout>}/>
            </Route>

            <Route path="supplier">
            <Route index element={<ProtectedRout userdata={userData}><SupplierList /></ProtectedRout>} />
            <Route path=":supplierId" element={<ProtectedRout userdata={userData}><Supplier /></ProtectedRout>} />
            <Route path="view/:supplierId" element={<ProtectedRout userdata={userData}><SupplierView /></ProtectedRout>} />
            <Route path="newsupply" element={<ProtectedRout userdata={userData}><NewSupplier  inputs={supplierInputs} title="Add New Supplier"/></ProtectedRout>} />
            <Route path="newsupplymatrial/:suppliermatrialId" element={<ProtectedRout userdata={userData}><NewSupplierMatrial  inputs={supplierMaterialInputs} title="Add New Supplying Material To Supplier "/></ProtectedRout>} />
          </Route>

            <Route path="supplierorders">
            <Route index element={<ProtectedRout userdata={userData}><SupplierordersList /></ProtectedRout>} />
            <Route path="view/:supplierorderId" element={<ProtectedRout userdata={userData}><SupplyOrderView /></ProtectedRout>} />
            <Route path="newordersupply" element={<ProtectedRout userdata={userData}><NewSupplierorder  inputs={supplierorderInputs} title="Order Raw Material from Supplier"/></ProtectedRout>} />
          </Route>

          </Route>
        </Routes>
      </BrowserRouter>
      </SupplierorderContextProvider>
      </SupplierContextProvider>
      </ManufactoringContextProvider>
      </RawMatrialInventoryContextProvider>
      </RawMatrialContextProvider>
      </ProductInventoryContextProvider>
      </AllproductContextProvider>
      </CategoryContextProvider>
      </EmployeeContextProvider>
    </div>
  );
}

export default App;