import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          One of the challenges in financial planning arises when advisors or solutions earn their money through commission on product sales. You always wonder if the advisor is selling what's good for you.

​

With Fincyan you need have no such worries. Our recommendations are solely guided by what is best for you. We will make it clear when we advertise or provide product referrals, and keep them separate from our recommendations.
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Understand your goals"
              description="This may sound obvious, but we know that most solutions fail to get this right. Which makes the plan irrelevant when the time comes.

              ​
              
              We use AI to make it easy for you to articulate your goals.
              
               
              
              We do not ask you to predict inflation rates, interest rates etc. We let you focus on what's important to you - be it education, buying a home, retirement etc."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Plan your goals"
              description="Once we have your goals right, our algorithms do the hard work to help you with your financial decisions.

              ​
              
              We make recommendations on how much to save, how much to insure and where to invest, to ensure your goals are met.
              
              ​
              
              We do this in a holistic manner by taking into account your life stage, your goals, and products available in the market. "
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Secure your goals"
              description="Times change, people change, goals change and markets change as well. Most solutions ignore this reality. We don't. 

              ​
              
              We stay with you all through your journey. We understand the changes in your life and we keep an eye on the market at all times. 
              
              ​
              
              We ensure your goals continue to be relevant, and financial decisions are aligned to your goals."
              icon={VerifiedUser}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
