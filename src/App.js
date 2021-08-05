import React from "react";
import LandingPage from "./pages/landing page/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AudioBook from "./pages/main/components/audio-book/AudioBook";
import { ToastContainer } from "material-react-toastify";
import Redirect from "react-router-dom/es/Redirect";
import Header from "./components/heders/components/header/Header";
import Layout from "./components/layout/Layout";
import Main from "./pages/main/Main";
import MainPage from "./pages/main/components/main-page/MainPage";
import SubscriptionTypes from "./pages/main/components/subscription-types/SubscriptionTypes";
import BookDetail from "./pages/main/components/book-detail/BookDetail";
import { LayoutProvider } from "./context/LayoutContext";
import { ProductProvider } from "./context/ProductContext";

const isLogin = () => !!localStorage.getItem("x-auth-token");

//Pub-Pri Component

const PublicRoute = ({ component, ...props }) => {
  // return (
  //   <Route
  //     {...props}
  //     render={(props) => {
  //       if (isLogin()) return <Redirect to="/" />;
  //       else {
  //         return React.createElement(component, props);
  //       }
  //     }}
  //   />
  // );
};
const PrivateRoute = ({ render, ...props }) => {
  // return (
  //   <Route
  //     {...props}
  //     render={(props) => {
  //       if (isLogin()) return render(props);
  //       else return <Redirect to={"/"} />;
  //     }}
  //   />
  // );
};

const App = () => {
  return (
    <>
      {/*<BrowserRouter>*/}
      {/*  <Switch>*/}
      {/*<PublicRoute path={"/"} component={LandingPage} />*/}
      {/*<PrivateRoute*/}
      {/*  path={"/"}*/}
      {/*  render={() => (*/}
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <LayoutProvider>
            <ProductProvider>
              <Layout>
                <Main>
                  <Route path={"/index"} component={MainPage} />
                  <Route path={"/AudioBook"} component={AudioBook} />
                  <Route path={"/BookDetail/:id"} component={BookDetail} />
                  <Route
                    path={"/SubscriptionTypes"}
                    component={SubscriptionTypes}
                  />
                </Main>
              </Layout>
            </ProductProvider>
          </LayoutProvider>
        </Switch>
      </BrowserRouter>
      {/*      )}*/}
      {/*    />*/}
      {/*  </Switch>*/}
      {/*</BrowserRouter>*/}
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
