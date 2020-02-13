import React, {Fragment, PureComponent} from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';

//import components
import HeadArrowBack from '../../Components/Head/HeadArrowBack';

export default class AvaliaProdutoScreen extends PureComponent{
    
    constructor(props){
        super(props);
    }

    render(){

        const {navigation} = this.props;

        const routeBack = navigation.getParam("routeBack");
        const produto   = navigation.getParam("produto");

        return(
            <Fragment>
                <View style={{flex:1}}>


                    <Header 
                        leftComponent={<HeadArrowBack navigation={navigation} routeBack={routeBack} />} 
                        centerComponent={<Text style={{fontSize:18, color:"#FFF"}}>Avalia</Text>}
                            
                        containerStyle={{
                            backgroundColor: '#0086ff',
                            justifyContent: 'space-around',
                        }}
                    />
                    


                </View>
            </Fragment>
        );
    }
}