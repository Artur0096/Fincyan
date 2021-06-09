import React from "react";
import { Auth } from 'aws-amplify';

import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "views/EcommercePage/EcommercePage.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PresentationPage from "views/PresentationPage/PresentationPage.js";
import PricingPage from "views/PricingPage/PricingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ProductPage from "views/ProductPage/ProductPage.js";
import SectionsPage from "views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import PlanWithFinCyanPage from "views/PlanWithFinCyanPage/PlanWithFinCyan.js";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";



import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

import { createBrowserHistory } from "history";
//import { Router, Route, Switch } from "react-router";

let hist = createBrowserHistory();

export default function Routes({ appProps }) {
  console.log("before onload",  appProps);

  console.log("after onload", appProps);
    return (
      <Router history={hist}>
        <Switch>
          <AuthenticatedRoute path="/about-us" component={AboutUsPage} appProps={appProps}/>
          <AuthenticatedRoute path="/blog-post" component={BlogPostPage} appProps={appProps}/>
          <AuthenticatedRoute path="/blog-posts" component={BlogPostsPage} appProps={appProps}/>
          <AuthenticatedRoute path="/components" component={ComponentsPage} appProps={appProps}/>
          <AuthenticatedRoute path="/contact-us" component={ContactUsPage} appProps={appProps}/>
          <AuthenticatedRoute path="/ecommerce-page" component={EcommercePage} appProps={appProps}/>
          <AuthenticatedRoute path="/landing-page" component={LandingPage} appProps={appProps}/>
          <AuthenticatedRoute path="/pricing" component={PricingPage} appProps={appProps} />
          <AuthenticatedRoute path="/profile-page" component={ProfilePage} appProps={appProps} />
          <AuthenticatedRoute path="/product-page" component={ProductPage} appProps={appProps} />
          <AuthenticatedRoute path="/sections" component={SectionsPage} appProps={appProps} />
          <AuthenticatedRoute path="/shopping-cart-page" component={ShoppingCartPage} appProps={appProps} />

          <AuthenticatedRoute path="/error-page" component={ErrorPage} appProps={appProps} />
          <AuthenticatedRoute  path="/presentation-page" component={PresentationPage} appProps={appProps} />
          <AuthenticatedRoute   path="/plan-with-fincyan" exact component={PlanWithFinCyanPage} appProps={appProps}/>
          <UnauthenticatedRoute  path="/login-page" exact component={LoginPage} appProps={appProps} />
          <UnauthenticatedRoute  path="/signup-page" exact component={SignupPage} appProps={appProps} />
          <UnauthenticatedRoute path="/" exact component={LandingPage} appProps={appProps} />
        </Switch>
      </Router>
        );
  }
