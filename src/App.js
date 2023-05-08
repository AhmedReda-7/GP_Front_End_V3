import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";

import { useContext } from "react";
import {
  supplierMaterialInputs,
  supplierorderInputs,
  supplierInputs,
  categoryInputs,
  userInputs,
  productInputs,
  productinventoryInputs,
  rawmatrialInputs,
  rawmatrialinventoryInputs,
  manufacturInputs,
} from "./formSource";

import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import Overviewofsales from "./Pages/overviewforsales/Overviewofsales";
// import Daily from './Pages/dailyofsales/Daily'
// import Monthly from "./Pages/monthyofsales/Monthly";

import EmployeeList from "./Pages/employeelist/EmployeeList";

import ProductinventoryList from './Pages/productsinventorylist/ProductinventoryList'; 
import Productinventory from './Pages/productinventory/Productinventory'; 
import NewProductinventory from './Pages/newproductinventory/NewProductinventory.jsx'; 

import Distributer from "./Pages/distributor/Distributor";
import NewDistributer from "./Pages/newDistributor/NewDistributor";
import EditDistributer from "./Pages/editDistributor/EditDistributor.jsx";


import CategoryList from "./Pages/categorylist/CategoryList.jsx";
import NewCategory from "./Pages/newcategory/NewCategory";
import Category from "./Pages/category/Category";
import RawMatrialList from "./Pages/rawmatrialList/RawMatrialList";
import Newmatrial from "./Pages/newmatrial/Newmatrial";
import RawMatrial from "./Pages/rawmatrial/RawMatrial.jsx";
import RawMatrialInventoryList from "./Pages/rawmatrialinventorylist/RawMatrialInventoryList.jsx";
import RawMatrialinventory from "./Pages/rawmatrialinventory/RawMatrialinventory";
import NewmatrialInventory from "./Pages/newmatrialinventory/NewmatrialInventory.jsx";
import ManufacturList from "./Pages/ManufacturList/ManufacturList";
import NewSupplierMatrial from "./Pages/NewSupplierMatrial/NewSupplierMatrial.jsx";
import NewSupplierorder from "./Pages/NewSupplierorder/NewSupplierorder";
import SupplierList from "./Pages/supplier/SupplierList";
import Supplier from "./Pages/supplieredit/Supplier";
import SupplierView from "./Pages/SupplierView/SupplierView";
import NewSupplier from "./Pages/NewSupplier/NewSupplier";
import SupplierordersList from "./Pages/supplierorderlist/SupplierordersList";
import { EmployeeContextProvider } from "./context/employee";
import { CategoryContextProvider } from "./context/CategoryContext";
import { AllproductContextProvider } from "./context/AllproductContext";
import { ProductInventoryContextProvider } from "./context/ProductInventoryContext";
import { RawMatrialContextProvider } from "./context/RawMatrialContext";
import { RawMatrialInventoryContextProvider } from "./context/RawMatrialInventoryContext";
import { ManufactoringContextProvider } from "./context/ManufactoringContext";
import { SupplierorderContextProvider } from "./context/SupplierorderContext.jsx";
import NewManufactur from "./Pages/newmanufactur/NewManufactur";
import EmployeeView from "./Pages/employeeview/EmployeeView";
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










import Journals from "./Pages/journals/Journals";
import EditJournal from "./Pages/editJournals/EditJournal";
import NewJournal from "./Pages/newJournal/NewJournal";
import Accounts from "./Pages/accounts/Accounts";
import EditAccount from "./Pages/editAccount/EditAccount";
import NewAccount from "./Pages/newAccount/NewAccount";
import { AccountContextProvider } from "./context/AccountContext";
import { JournalContextProvider } from "./context/JournalContext";
import FmsCategory from "./Pages/fmsCategory/FmsCategory";
import FmsEditCategory from "./Pages/fmsEditCategory/FmsEditCategory";
import FmsNewCategory from "./Pages/fmsNewCategory/FmsNewCategory";
import { FmsCategoryContextProvider } from "./context/FmsCategoryContext";
import Statement from "./Pages/statement/Statement";
import EditStatement from "./Pages/editStatement/EditStatement";
import { StatementContextProvider } from "./context/StatementContext";
import Template from "./Pages/template/Template";
import EditTemplate from "./Pages/editTemplate/EditTemplate";
import NewTemplate from "./Pages/newTemplate/NewTemplate";
import { TemplateContextProvider } from "./context/TemplateContext";
import ViewAccount from "./Pages/viewAccount/ViewAccount";
import FmsViewCategory from "./Pages/fmsViewCategory/FmsViewCategory";
import ViewStatement from "./Pages/viewStatement/ViewStatement";
import ViewTemplate from "./Pages/ViewTemplate/ViewTemplate";
import Distributor from "./Pages/distributor/Distributor";
import EditDistributor from "./Pages/editDistributor/EditDistributor.jsx";
import NewDistributor from "./Pages/newDistributor/NewDistributor";
import { DistributorContextProvider } from "./context/DistributorContext";
import DistributionOrders from "./Pages/distributionOrders/DistributionOrders";
import NewDistributionOrders from "./Pages/newDistributionOrders/NewDistributionOrders";
import ViewDistributionOrders from "./Pages/viewDistributionOrders/ViewDistributionOrders";
import { DistributionOrdersContextProvider } from "./context/DistributionOrdersContext";


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
                        <FmsCategoryContextProvider>
                          <AccountContextProvider>
                            <JournalContextProvider>
                              <StatementContextProvider>
                                <TemplateContextProvider>
                                  <DistributorContextProvider>
                                    <DistributionOrdersContextProvider>
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
                                          <Route path="/">
                                            <Route index element={<Home />} />
                                            <Route
                                              path="login"
                                              element={<Login />}
                                            />
                                            <Route
                                              path="overview"
                                              element={
                                                <Overviewofsales
                                                  title="Overview of General Revenue and Profit"
                                                  title2="Breakdown of Sales By Category"
                                                />
                                              }
                                            />

                                            <Route path="employee">
                                              <Route
                                                index
                                                element={<EmployeeList />}
                                              />
                                              <Route
                                                path=":employeeId"
                                                element={<Single />}
                                              />
                                              <Route
                                                path="view/:employeeId"
                                                element={<EmployeeView />}
                                              />
                                              <Route
                                                path="new"
                                                element={
                                                  <New
                                                    inputs={userInputs}
                                                    title="Add New Emloyee"
                                                  />
                                                }
                                              />
                                            </Route>
                                            <Route path="journals">
                                              <Route
                                                index
                                                element={<Journals />}
                                              />
                                              <Route
                                                path=":jeid"
                                                element={<EditJournal />}
                                              />
                                              <Route
                                                path="newjournal"
                                                element={<NewJournal />}
                                              />
                                            </Route>
                                            <Route path="accounts">
                                              <Route
                                                index
                                                element={<Accounts />}
                                              />
                                              <Route
                                                path="view/:accId"
                                                element={<ViewAccount />}
                                              />
                                              <Route
                                                path=":accId"
                                                element={<EditAccount />}
                                              />
                                              <Route
                                                path="newaccount"
                                                element={<NewAccount />}
                                              />
                                            </Route>

                                            <Route path="category">
                                              <Route
                                                index
                                                element={<CategoryList />}
                                              />

                                              <Route
                                                path=":catId"
                                                element={<Category />}
                                              />
                                              <Route
                                                path="newcategory"
                                                element={
                                                  <NewCategory
                                                    inputs={categoryInputs}
                                                    title="Add New Category"
                                                  />
                                                }
                                              />
                                            </Route>
                                            <Route path="statement">
                                              <Route
                                                index
                                                element={<Statement />}
                                              />
                                              <Route
                                                path="view/:staId"
                                                element={<ViewStatement />}
                                              />
                                              <Route
                                                path=":staId"
                                                element={<EditStatement />}
                                              />
                                            </Route>
                                            <Route path="template">
                                              <Route
                                                index
                                                element={<Template />}
                                              />
                                              <Route
                                                path="view/:tempId"
                                                element={<ViewTemplate />}
                                              />
                                              <Route
                                                path=":tempId"
                                                element={<EditTemplate />}
                                              />
                                              <Route
                                                path="newtemplate"
                                                element={<NewTemplate />}
                                              />
                                            </Route>

                                            <Route path="distributor">
                                              <Route
                                                index
                                                element={<Distributor />}
                                              />
                                              <Route
                                                path=":distributorId"
                                                element={<EditDistributor />}
                                              />
                                              <Route
                                                path="newDistributor"
                                                element={<NewDistributor />}
                                              />
                                            </Route>

                                            <Route path="journals">
                                              <Route
                                                index
                                                element={<Journals />}
                                              />
                                              <Route
                                                path=":jeid"
                                                element={<EditJournal />}
                                              />
                                              <Route
                                                path="newjournal"
                                                element={<NewJournal />}
                                              />
                                            </Route>
                                            <Route path="accounts">
                                              <Route
                                                index
                                                element={<Accounts />}
                                              />
                                              <Route
                                                path="view/:accId"
                                                element={<ViewAccount />}
                                              />
                                              <Route
                                                path=":accId"
                                                element={<EditAccount />}
                                              />
                                              <Route
                                                path="newaccount"
                                                element={<NewAccount />}
                                              />
                                            </Route>
                                            <Route path="fmscategory">
                                              <Route
                                                index
                                                element={<FmsCategory />}
                                              />
                                              <Route
                                                path="view/:catId"
                                                element={<FmsViewCategory />}
                                              />
                                              <Route
                                                path=":catId"
                                                element={<FmsEditCategory />}
                                              />
                                              <Route
                                                path="fmsnewcategory"
                                                element={<FmsNewCategory />}
                                              />
                                            </Route>
                                            <Route path="statement">
                                              <Route
                                                index
                                                element={<Statement />}
                                              />
                                              <Route
                                                path="view/:staId"
                                                element={<ViewStatement />}
                                              />
                                              <Route
                                                path=":staId"
                                                element={<EditStatement />}
                                              />
                                            </Route>
                                            <Route path="template">
                                              <Route
                                                index
                                                element={<Template />}
                                              />
                                              <Route
                                                path="view/:tempId"
                                                element={<ViewTemplate />}
                                              />
                                              <Route
                                                path=":tempId"
                                                element={<EditTemplate />}
                                              />
                                              <Route
                                                path="newtemplate"
                                                element={<NewTemplate />}
                                              />
                                            </Route>

                                            <Route path="products">
                                              <Route
                                                index
                                                element={<ProductList />}
                                              />
                                              <Route
                                                path=":productId"
                                                element={<Product />}
                                              />
                                              <Route
                                                path="newproduct"
                                                element={
                                                  <NewProduct
                                                    inputs={productInputs}
                                                    title="Add New Product"
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="productsinventory">
                                              <Route
                                                index
                                                element={
                                                  <ProductinventoryList />
                                                }
                                              />
                                              <Route
                                                path=":productinventoryId"
                                                element={<Productinventory />}
                                              />
                                              <Route
                                                path="newproductinventory"
                                                element={
                                                  <NewProductinventory
                                                    inputs={
                                                      productinventoryInputs
                                                    }
                                                    title="Add New Product To Inventory"
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="category">
                                              <Route
                                                index
                                                element={<CategoryList />}
                                              />
                                              <Route
                                                path=":categoryId"
                                                element={<Category />}
                                              />
                                              <Route
                                                path="newcategory"
                                                element={
                                                  <NewCategory
                                                    inputs={categoryInputs}
                                                    title="Add New Category"
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="rawmatrial">
                                              <Route
                                                index
                                                element={<RawMatrialList />}
                                              />
                                              <Route
                                                path=":materialId"
                                                element={<RawMatrial />}
                                              />
                                              <Route
                                                path="newrawmatrial"
                                                element={
                                                  <Newmatrial
                                                    inputs={rawmatrialInputs}
                                                    title="Add New Raw Material"
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="rawmatrialinventory">
                                              <Route
                                                index
                                                element={
                                                  <RawMatrialInventoryList />
                                                }
                                              />
                                              <Route
                                                path=":rawmatrialinventoryId"
                                                element={
                                                  <RawMatrialinventory />
                                                }
                                              />
                                              <Route
                                                path="newrawmatrialinventory"
                                                element={
                                                  <NewmatrialInventory
                                                    inputs={
                                                      rawmatrialinventoryInputs
                                                    }
                                                    title="Add New Raw Material Inventory"
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="manufactur">
                                              <Route
                                                index
                                                element={<ManufacturList />}
                                              />
                                              <Route
                                                path="view/:manufacturId"
                                                element={<ManufactureView />}
                                              />
                                              <Route
                                                path="newmanufactur"
                                                element={
                                                  <NewManufactur
                                                    inputs={manufacturInputs}
                                                    title="Add New Manufacturing  "
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="supplier">
                                              <Route
                                                index
                                                element={<SupplierList />}
                                              />
                                              <Route
                                                path=":supplierId"
                                                element={<Supplier />}
                                              />
                                              <Route
                                                path="view/:supplierId"
                                                element={<SupplierView />}
                                              />
                                              <Route
                                                path="newsupply"
                                                element={
                                                  <NewSupplier
                                                    inputs={supplierInputs}
                                                    title="Add New Supplier"
                                                  />
                                                }
                                              />
                                              <Route
                                                path="newsupplymatrial/:suppliermatrialId"
                                                element={
                                                  <NewSupplierMatrial
                                                    inputs={
                                                      supplierMaterialInputs
                                                    }
                                                    title="Add New Supplying Material To Supplier "
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="supplierorders">
                                              <Route
                                                index
                                                element={<SupplierordersList />}
                                              />
                                              <Route
                                                path="view/:supplierorderId"
                                                element={<SupplyOrderView />}
                                              />
                                              <Route
                                                path="newordersupply"
                                                element={
                                                  <NewSupplierorder
                                                    inputs={supplierorderInputs}
                                                    title="Order Raw Material from Supplier"
                                                  />
                                                }
                                              />
                                            </Route>

                                            <Route path="distributororders">
                                              <Route
                                                index
                                                element={<DistributionOrders />}
                                              />
                                              <Route
                                                path="view/:id"
                                                element={
                                                  <ViewDistributionOrders />
                                                }
                                              />
                                              <Route
                                                path="neworder"
                                                element={
                                                  <NewDistributionOrders
                                                    inputs={supplierorderInputs}
                                                    title="Order Raw Material from Supplier"
                                                  />
                                                }
                                              />
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
                                    </DistributionOrdersContextProvider>
                                  </DistributorContextProvider>
                                </TemplateContextProvider>
                              </StatementContextProvider>
                            </JournalContextProvider>
                          </AccountContextProvider>
                        </FmsCategoryContextProvider>
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
