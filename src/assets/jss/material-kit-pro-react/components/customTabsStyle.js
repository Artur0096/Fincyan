import {
  whiteColor,
  defaultFont,
  hexToRgb
} from "assets/jss/material-kit-pro-react.js";



const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },

  tabsContainer: {},
  tabsContainerRTL: {
    float: "right"
  },
  tabIcon: {
    width: "24px",
    height: "24px",
    marginRight: "4px"
  },
  customTabsRoot: {
    minHeight: "unset !important"
  },
  customTabSelected: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ", 0.2)",
    transition: "background-color .4s"
  },
  customTabRoot: {
    minWidth: "145px !important",
    width: "145px !important",
    maxWidth: "145px !important",
    borderRadius: "3px",
    opacity: "1",
    height: "auto",
    padding: "10px 15px",
    display: "block",
    minHeight: "unset",
    fontWeight: "500",
    fontSize: "12px",
    lineHeight: "24px"
  },
  customTabWrapper: {
    textAlign: "left",
    minWidth: "145px !important",
    width: "145px !important",
    maxWidth: "145px !important",
    display: "inline-block",
    minHeight: "unset !important",
    //minWidth: "unset !important",
    //width: "unset !important",
    height: "unset !important",
    //maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    // "&,& *": {
    //   letterSpacing: "normal !important"
    // }
  },
  customTabRootIcon: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px  10px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    marginLeft: "4px",
    fontWeight: "500",
    fontSize: "12px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  customTabWrapperIcon: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    }
  }
};

export default customTabsStyle;
