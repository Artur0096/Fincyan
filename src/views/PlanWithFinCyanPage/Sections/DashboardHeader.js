import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Fingerprint from "@material-ui/icons/Fingerprint";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-pro-react/views/PlanWithFinCyanPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>A snapshot of your life </h2>
          <h5 className={classes.description}>
          Each card below represents one facet of your life which we will consider while looking for the right product or strategy for you. 
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
