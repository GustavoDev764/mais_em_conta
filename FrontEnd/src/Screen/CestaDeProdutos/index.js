import React,{Fragment, PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';


//HeadHome
import HeadGrupo from '../../Components/Head/HeadGrupo';
import HeadMenu from '../../Components/Head/HeadMenu';
import HeadList from '../../Components/Head/HeadList';
import HeadSearch from '../../Components/Head/HeadSearch';

export default class CestaDeProdutoScreen extends PureComponent{

    constructor(props){
        super(props);
    }


    static navigationOptions = {
        //Drawer
        drawerLabel: "Cesta de Produto",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        
        //Stack
        title: "Mais em Conta", 
        headerMode: "none",
        
    };

    //Navegações
    
    openTelaSearhcView = () => {
        return this.props.navigation.navigate('SearchBarScreen',{routeBack: "CestaDeProdutoScreen"});
    }

    //Fim de Navegações


    openMenuDrawer = () => {
        return this.props.navigation.openDrawer();
     }


    render(){
        return(
            <Fragment>

                <Header 
                    leftComponent={<HeadMenu openMenu={this.openMenuDrawer} />} 
                    centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Minha Cesta</Text>}
                    rightComponent={<HeadSearch opressFunc={this.openTelaSearhcView} /> }
                    containerStyle={{
                        backgroundColor: '#0086ff',
                        justifyContent: 'space-around',
                      }}
                />

            </Fragment>
        );
    }
}