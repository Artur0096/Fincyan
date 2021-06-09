import React, {useEffect, useState} from "react";
import Routes from "./Routes";
import {Auth} from "aws-amplify";
export default function App(props) {


    let [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

     useEffect(() => {
    onLoad();
     }, []);

   async function onLoad(){

        try {

             await Auth.currentSession().then(data => {
                console.log(data);
                 userHasAuthenticated(true);
                 console.log("Logged In!!!!!",isAuthenticated)
            }).catch(err=> console.log(err));


        }
        catch(e) {
            if (e !== 'No current user') {
                alert(e);
                alert('No current user');
            }
        }
        setIsAuthenticating(false);

    }


    return (

        !isAuthenticating &&

          <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        );
}