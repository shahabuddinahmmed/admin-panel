import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";
import Home from "./pages/home/Home";
import ListUser from "./pages/list/ListUser";
import ListProduct from "./pages/list/ListProduct";
import Login from "./pages/login/Login";
import NewProduct from "./pages/new/newProduct";
import NewUser from "./pages/new/newUser";
import Single from "./pages/single/Single";
import "./style/dark.scss";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<ListUser />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new-user"
                  element={<NewUser inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<ListProduct />} />
                <Route path=":paymentId" element={<Single />} />
                <Route
                  path="new-product"
                  element={
                    <NewProduct
                      inputs={productInputs}
                      title="Add New Product"
                    />
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
