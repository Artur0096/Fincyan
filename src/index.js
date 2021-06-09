/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
// import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
// import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
// import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
// import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
// import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
// import EcommercePage from "views/EcommercePage/EcommercePage.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
// import PresentationPage from "views/PresentationPage/PresentationPage.js";
// import PricingPage from "views/PricingPage/PricingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import ProductPage from "views/ProductPage/ProductPage.js";
// import SectionsPage from "views/SectionsPage/SectionsPage.js";
// import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
// import SignupPage from "views/SignupPage/SignupPage.js";
// import ErrorPage from "views/ErrorPage/ErrorPage.js";
// import PlanWithFinCyanPage from "views/PlanWithFinCyanPage/PlanWithFinCyan.js";
import App from "./App";


import Amplify from 'aws-amplify';
import AWSConfig from './AWSConfig';
/* run the folowing commands at the command prompt
amplify add auth
amplify push
npm add aws-amplify

*/
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// Amplify.configure(awsAWSConfig);
Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: AWSConfig.cognito.REGION,
    userPoolId: AWSConfig.cognito.USER_POOL_ID,
    identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: AWSConfig.cognito.APP_CLIENT_ID
  },
  // Storage: {
  //   region: AWSConfig.s3.REGION,
  //   bucket: AWSConfig.s3.BUCKET,
  //   identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID
  // },
  // API: {
  //   endpoints: [
  //     {
  //       name: "notes",
  //       endpoint: AWSConfig.apiGateway.URL,
  //       region: AWSConfig.apiGateway.REGION
  //     },
  //   ]
  // }
});



//var hist = createBrowserHistory();


ReactDOM.render(
  <App />,
  document.getElementById("root"));

