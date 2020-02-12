import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';


/* Navigation */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SideBar from './src/Components/Sidebar';

/* Fim Navigation */

//Rotas
import HomeScreen from './src/Screen/home';
import SearchBar from './src/Screen/searchBar';

import Produto from './src/Screen/produto';



//Fim da rotas

const MyDrawerNavigator = createDrawerNavigator(
  {
   
    HomeScreen,
    SearchBar,
    Produto,
    
   
  },
  {
      contentComponent: (props) =>{ return  <SideBar {...props} />},
      hideStatusBar: true,
      contentOptions:{
          activeBackgroundColor: "#f7f7f7",
          activeTintColor: "#484848",

          itemsContainerStyle:{
            marginTop: 16,
            marginHorizontal: 8,
          },

          itemStyle:{
            borderRadius: 4,
          }

      }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
     
      App: MyDrawerNavigator,
   
    },
    {
      initialRouteName: 'App',
    }
  )
);