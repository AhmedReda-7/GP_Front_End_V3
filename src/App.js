import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Distributer from './Pages/distributer/Distributer';
import NewDistributer from './Pages/newdistributer/NewDistributer';
import EditDistributer from './Pages/editdistributer/EditDistributer.jsx';
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
import SupplyOrderView from './Pages/supporderview/SupplyOrderView'

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
function App() {
  const { darkMode } = useContext(DarkModeContext);
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
                                  <BrowserRouter>
                                    <Routes>
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
                                          <Route index element={<Journals />} />
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
                                          <Route index element={<Accounts />} />
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
                                            path="newcategory"
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
                                          <Route index element={<Template />} />
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
                                        <Route path="distributer">
                                          <Route
                                            index
                                            element={<Distributer />}
                                          />
                                          <Route
                                            path=":distributerId"
                                            element={<EditDistributer />}
                                          />
                                          <Route
                                            path="newDistributer"
                                            element={
                                              <NewDistributer
                                                inputs={userInputs}
                                                title="Add New Distributer"
                                              />
                                            }
                                          />
                                        </Route>


                                        
                                        <Route path="journals">
                                          <Route index element={<Journals />} />
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
                                          <Route index element={<Accounts />} />
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
                                            path="newcategory"
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
                                          <Route index element={<Template />} />
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
                                            element={<ProductinventoryList />}
                                          />
                                          <Route
                                            path=":productinventoryId"
                                            element={<Productinventory />}
                                          />
                                          <Route
                                            path="newproductinventory"
                                            element={
                                              <NewProductinventory
                                                inputs={productinventoryInputs}
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
                                            element={<RawMatrialinventory />}
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
                                                inputs={supplierMaterialInputs}
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
                                      </Route>
                                    </Routes>
                                  </BrowserRouter>
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