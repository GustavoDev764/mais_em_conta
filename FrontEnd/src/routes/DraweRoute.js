import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';

/* Navigation */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SideBar from '../Components/Sidebar';

/* Fim Navigation */

//Rotas Drawer
import {HomeScreenStack} from '../Screen/home';
import SearchBarScreen from '../Screen/searchBar';
import ListProdutoScreen from '../Screen/listaProduto';
import CestaDeProdutoScreen from '../Screen/CestaDeProdutos';
import LojaScreen from '../Screen/Loja';
import FiltroScreen from '../Screen/filtro';
import {PerfilScreenStack} from '../Screen/perfilUsuario';
import LoginScreen from '../Screen/login';


const MyDrawerNavigator = createDrawerNavigator(
    {
      HomeScreenStack,
      SearchBarScreen,
      ListProdutoScreen,
      CestaDeProdutoScreen,
      LojaScreen,
      FiltroScreen,
      PerfilScreenStack,
      LoginScreen,            
     
    },
    {
        contentComponent: (props) =>{ return  <SideBar {...props} />},
        //hideStatusBar: true,
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

const Routes =  createAppContainer(
    createSwitchNavigator(
      {
       
        App: MyDrawerNavigator,
     
      },
      {
        initialRouteName: 'App',
      }
    )
);

export default Routes;