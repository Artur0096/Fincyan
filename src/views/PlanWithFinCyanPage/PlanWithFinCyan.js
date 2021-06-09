import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-pro-react/views/PlanWithFinCyanPage.js";

// Sections for this page
import CardsSection from "./Sections/CardsSection.js";
import DashboardHeader from "./Sections/DashboardHeader.js";




const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function PlanWithFinCyanPage(props) {
  console.log("plane" + props.isAuthenticated);
  const classes = useStyles();
  const { ...rest } = props;
  console.log(dashboardRoutes)
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="FinCyan"
        links={<HeaderLinks dropdownHoverColor="info"  isAuthenticated={props.isAuthenticated} userHasAuthenticated = {props.userHasAuthenticated}/>}
      />
      {/* <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="FinCyan"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      /> */}
      <Parallax filter image={require("assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Dashboard</h1>
              <h4>
              A key aspect of financial planning is to have an overview of yourself, assets and your obligations. Scroll down this page to build and see this overview
              </h4>
              <br />
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main,classes.mainRaised)}>
        <div className={classes.container}>
          <DashboardHeader />
          
          <CardsSection />

        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
