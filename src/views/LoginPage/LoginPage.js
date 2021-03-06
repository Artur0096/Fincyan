/*eslint-disable*/
import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from 'aws-amplify';

import InputAdornment from "@material-ui/core/InputAdornment";
//import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
//import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
//import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleClick (event){
    
    //console.log("clicked",firstName,email,password)
    event.preventDefault()
   await Auth.signIn(email, password)
      .then(response => {
        console.log("response:",response)
        props.userHasAuthenticated(true);


          alert("logged in");
        props.history.push("/plan-with-fincyan");
      })
      .catch(error =>  {
        console.log("error:", error)
        alert(error.message)
      })

  }
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="FinCyan"
        links={<HeaderLinks dropdownHoverColor="info"  />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}e
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.description + " " + classes.textCenter}>
                    Or Be Classical
                  </p>
                  <CardBody signup>
                    <CustomInput
                      id="first"
                      value={firstName}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "First Name...",
                        type: "text",
                        onChange: ((event) => setFirstName(event.target.value)),
                        startAdornment: (
                          <InputAdornment position="start">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Email...",
                        type: "email",
                        onChange: ((event) => setEmail(event.target.value)),
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        onChange: ((event) => setPassword(event.target.value)),
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                  { firstName || email || password
                    ?
                    <Button simple color="primary" size="lg" type="submit"  onClick={handleClick}> 
                      Get started
                    </Button>
                    :<Button simple color="primary" size="lg"  href="/signup-page">
                      Sign Up
                    </Button>}
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

      </div>
    </div>
  );
}
