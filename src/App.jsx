
import "./css/sb-admin-2.min.css"; // import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./Dash/Dashboard";
import Login from "./Login/Login";
import Portal from "./Portal";

import Cards from './Cards/Cards';
import Button from './Buttons/Button';
import Users from "./Users";
import Createuser from "./Createuser";
import UserView from "./UserView";
import EditUser from "./EditUser";
import Product from "./Product";
import CreateProduct from "./CreateProduct";
import ProductsView from "./ProductsView";
import EditProduct from "./EditProduct"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
         
          <Route path="cards" element={<Cards />} />
          <Route path="buttons" element={<Button />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userid" element={<UserView />} />
          <Route path="users/edit/:id" element={<EditUser />} />
          <Route path="create-users" element={<Createuser />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:productid" element={<ProductsView />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
