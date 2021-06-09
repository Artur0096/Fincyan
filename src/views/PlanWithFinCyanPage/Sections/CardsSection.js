
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-pro-react/views/PlanWithFinCyanPageSections/productStyle.js";
import CardsArrayData from 'Data/FrontEndModel'

const classes  = makeStyles(styles);
//const classes = useStyles()

export default class CardsSection extends Component {
  constructor(props){
    super(props);
    this.state={
      cards: []
    }
   }
  
  async  componentDidMount() {
    
  const  CardsArray = JSON.parse(JSON.stringify(CardsArrayData['Data']['Scenario_data'][0]['cards'])) ;
    // CardsArray.forEach(card => {
    //      Object.entries(card['form']).forEach(([field, value]) => card[field] = value);

    // })
    CardsArray.forEach((card) => {
      let cardKeyToBeDeleted = ['image','scenario','user','goal_success','errors','icon','scale','priority'];
        cardKeyToBeDeleted.forEach((f) => delete card[f])
    })
    console.log('form',CardsArray)
    this.setState({
      cards: CardsArray
    });
  }
  render() {
    if (Object.keys(this.state.cards).length) {
      console.log('render',this.state.cards);
    }
  return (

    <div className={classes.section}>

       <GridContainer direction="row">
       
        <GridContainer direction="column" xs={12} sm={4} md={4}>
          <h3 className={classes.title}>Profile</h3>
          <GridItem >
          {Object.keys(this.state.cards).length
              ? this.state.cards.filter(opt => opt.card_category === "profile").map((item, index) => (
            <CustomTabs
              cards
              headerColor="primary"
              tabs={[
                {
                  tabIcon: Face,
                  tabName: item.title,
                  tabContent:item.title,
                },
                {
                  tabIcon: Chat
                },
                {
                  tabIcon: EditIcon,
                },
                {
                  tabIcon: DeleteIcon,
                }
              ]}
            />        
            ))
            : null}
          </GridItem>    
         </GridContainer>


         <GridContainer direction="column" xs={12} sm={4} md={4} >
           <h3 className={classes.title}>Asset</h3>
           <GridItem>
           {Object.keys(this.state.cards).length
              ? this.state.cards.filter(opt => opt.card_category=== "Asset").map((item, index) => (
             <CustomTabs
               headerColor="primary"
              tabs={[
                 {
                   tabIcon: Face,
                   tabName: item.title,
                   tabContent: (
                     <p className={classes.textCenter}>
                       Grid 2
                I think that’s a responsibility that I have, to push
               possibilities, to show people, this is the level that
               things could be at. So when you get something that has
               the name Kanye West on it,
                       </p>
                  )
                },
                 {
                   tabIcon: Chat
                 },
               {
                   tabIcon: EditIcon
               },
                {
                  tabIcon: DeleteIcon
                }
               ]}
             />
             ))
             : null}
          </GridItem>
         </GridContainer>


         <GridContainer direction="column" xs={12} sm={4} md={4} >
           <h3 className={classes.title}>Goal</h3>
           <GridItem>    
           {Object.keys(this.state.cards).length
              ? this.state.cards.filter(opt => opt.card_category=== "Goal").map((item, index) => (
             <CustomTabs
               headerColor="primary"
               tabs={[
                 {
                   tabIcon: Face,
                   tabName: item.title,
                   tabContent: (
                     <p className={classes.textCenter}>
                       Grid 3
       I think that’s a responsibility that I have, to push
       possibilities, to show people, this is the level that
       things could be at. So when you get something that has
       the name Kanye West on it,
                       </p>
                  )
                 },
                 {
                  tabIcon: Chat
                 },
                 {
                   tabIcon: EditIcon
                 },
                 {
                   tabIcon: DeleteIcon
                 }
               ]}
             />
              ))
            : null}
           </GridItem>
          </GridContainer>
      </GridContainer> 
    </div>

  );
}
}