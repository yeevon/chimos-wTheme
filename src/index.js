/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
// import Index from "views/Index.js";
import LandingPage from "website/views/LandingPage.js";
import ContactUs from "website/views/ContactPage"
import ServicePage from "website/views/ServicePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/chimos-wTheme/index"
          render={props => <LandingPage {...props} />}
          />
        <Route
          path="/chimos-wTheme/contact-us"
          render={props => <ContactUs {...props} />}
        />
        <Route
          path="/chimos-wTheme/services"
          render={props => <ServicePage {...props} />}
        />
        {/* <Redirect to="/chimos-wTheme/index" /> */}
        <Redirect from="/chimos-wTheme" to="/chimos-wTheme/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
