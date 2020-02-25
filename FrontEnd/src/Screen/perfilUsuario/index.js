import React,{Fragment, PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';

//import components
import HeadArrowBack from '../../Components/Head/HeadArrowBack';
import Theme from '../../Style';
import Body from '../../Components/Body';

export default class PerfilScreen extends PureComponent{

    constructor(props){
        super(props);
    }


    static navigationOptions = {
        //Drawer
        drawerLabel: "Perfil",
        drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />,
        
        //Stack
        title: "Perfil", 
        headerMode: "none",
        
    };

    render(){

        const {navigation} = this.props;

        const routeBack = "ListProdutoScreen";

        
        return(
            <Fragment>

                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Filtro</Text>}
                                
                        containerStyle={[{
                               
                            justifyContent: 'space-around',
                        }, Theme.tmHead, Theme.backgroundPrimaryColor]}
                    />

            </Fragment>
        );
    }
}