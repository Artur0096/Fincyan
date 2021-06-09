import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-kit-pro-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState();
 
  const handleChange = (event, value) => {
    setValue(value);
  };


  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  const tabsContainer = classNames({
    [classes.tabsContainer]: true,
    [classes.tabsContainerRTL]: rtlActive
  });
  return (  
     <Card plain={plainTabs}>  
       <CardHeader color={headerColor} plain={plainTabs}>      
         {title !== undefined ? <div className={cardTitle}>{title}</div> : null }    
         <Tabs
          classes={{
            root: classes.customTabsRoot,
            flexContainer: tabsContainer,
            indicator: classes.displayNone
          }}
          value={value}
          onChange={handleChange}
          textColor="inherit"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon !== undefined && prop.tabName ) {
              icon = {
                icon: <prop.tabIcon className={classes.tabIcon} />
              };
           
            return (
              <Tab
                key={key}
                classes={{
                  root: classes.customTabRoot,
                  selected: classes.customTabSelected,
                  wrapper: classes.customTabWrapper
                }}
                // icon={<prop.tabIcon className={tabIcon} />}
                {...icon}
                label={prop.tabName}
              />
            );}
            else {
             icon ={icon: <prop.tabIcon className={classes.tabIcon} />} || icon == { } ;
          
            return (
              <Tab
              key={key}
              classes={{
                root: classes.customTabRootIcon,
                selected: classes.customTabSelected,
                wrapper: classes.customTabWrapperIcon
              }}
              // icon={<prop.tabIcon className={tabIcon} />}
              {...icon}
              label={prop.tabName}
              />
            ); }
          })}
        </Tabs> 
       </CardHeader>
       <CardBody>
         {tabs.map((prop, key) => {
           if (key === value) {
             return <div key={key}>{prop.tabContent}</div>;
           }
           return null;
         })}
       </CardBody>
     </Card>
 
  );
}

CustomTabs.defaultProps = {
  headerColor: "purple"
};

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose"
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.object.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};
