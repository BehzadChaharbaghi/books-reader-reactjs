import React from "react";
import LandingPage from "./pages/landing page/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import CategoryPage from "./pages/main/components/category-page/CategoryPage";
import { ToastContainer } from "material-react-toastify";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";
import MainPage from "./pages/main/components/main-page/MainPage";
import SubscriptionTypes from "./pages/main/components/subscription-types/SubscriptionTypes";
import BookDetail from "./pages/main/components/book-detail/BookDetail";
import { LayoutProvider } from "./context/LayoutContext";
import { ProductProvider } from "./context/ProductContext";
import MyLibrary from "./pages/main/components/my-library/MyLibrary";
import IncreaseCredit from "./pages/main/components/increase-credit/IncreaseCredit";
import UserInfo from "./pages/user-information/UserInfo";
import Auth from "./pages/auth/Auth";
import { render } from "@testing-library/react";
import MyOrders from "./pages/my-orders/MyOrders";
import ProductByCategory from "./pages/main/components/product-by-category/ProductByCategory";
import ProductBySearch from "./pages/product-by-search/ProductBySearch";
import Page404 from "./pages/404/page404";
import MostSellPage from "./pages/main/components/MostSell/most-sell-page/MostSellPage";
import FreeSectionPage from "./pages/landing page/components/FreeSection/free-section-page/FreeSectionPage";

// const isLogin = () => !!localStorage.getItem("token");
// //Pub-Pri Component
//
// const PublicRoute = ({ render, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={(props) => {
//         if (!isLogin()) return render(props);
//         else return <Redirect to={"/index"} />;
//       }}
//     />
//   );
// };
// const PrivateRoute = ({ render, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={(props) => {
//         if (isLogin()) return render(props);
//         else return <Redirect to={"/"} />;
//       }}
//     />
//   );
// };

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          {/*<PublicRoute path={"/login"} component={Auth} />*/}

          {/*<PublicRoute*/}
          {/*  path={"/"}*/}
          {/*  render={() => (*/}
          {/*    <LayoutProvider>*/}
          {/*      <ProductProvider>*/}
          {/*        <Switch>*/}
          {/*          <Route exact path={"/"} component={LandingPage} />*/}
          {/*          /!*<Layout>*!/*/}
          {/*          /!*  <Route path={"/login"} component={Auth} />*!/*/}
          {/*          /!*  <Main>*!/*/}
          {/*          /!*    <Switch>*!/*/}
          {/*          /!*      <Route path={"/index"} component={MainPage} />*!/*/}
          {/*          /!*      <Route*!/*/}
          {/*          /!*        path={"/NewProductPage"}*!/*/}
          {/*          /!*        component={NewProductPage}*!/*/}
          {/*          /!*      />*!/*/}
          {/*          /!*      <Route*!/*/}
          {/*          /!*        path={"/BookDetail/:id"}*!/*/}
          {/*          /!*        component={BookDetail}*!/*/}
          {/*          /!*      />*!/*/}
          {/*          /!*    </Switch>*!/*/}
          {/*          /!*  </Main>*!/*/}
          {/*          /!*</Layout>*!/*/}
          {/*          <Route component={Page404} />*/}
          {/*        </Switch>*/}
          {/*      </ProductProvider>*/}
          {/*    </LayoutProvider>*/}
          {/*  )}*/}
          {/*/>*/}

          {/*<PrivateRoute*/}
          {/*  path={"/index"}*/}
          {/*  render={() => (*/}
          <LayoutProvider>
            <ProductProvider>
              <Layout>
                <Main>
                  <Switch>
                    <Route path={"/index"} component={MainPage} />
                    <Route
                      path={"/CategoryPage/:id"}
                      component={CategoryPage}
                    />
                    <Route path={"/NewProductPage"} component={MostSellPage} />
                    <Route
                      path={"/FreeSectionPage"}
                      component={FreeSectionPage}
                    />
                    <Route path={"/BookDetail/:id"} component={BookDetail} />
                    <Route
                      path={"/ProductCategories/:id"}
                      component={BookDetail}
                    />
                    <Route
                      path={"/SubscriptionTypes"}
                      component={SubscriptionTypes}
                    />
                    <Route
                      path={"/IncreaseCredit"}
                      component={IncreaseCredit}
                    />
                    <Route path={"/MyLibrary"} component={MyLibrary} />
                    <Route path={"/MyOrders"} component={MyOrders} />
                    <Route
                      path={"/ProductBySearch/:qury"}
                      component={ProductBySearch}
                    />
                   {/* <Route component={Page404} />*/}
                  </Switch>
                </Main>
                <Route path={"/UserInfo"} component={UserInfo} />
              </Layout>
            </ProductProvider>
          </LayoutProvider>
          {/*  )}*/}
          {/*/>*/}
        </Switch>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3150}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
