import React, { Fragment, PureComponent } from 'react';
import {Badge} from 'react-native-elements';
import {TouchableOpacity, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Theme from '../../Style';

export default class HeadList extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){


        const { opressFunc } = this.props;
        
       // console.log(this.props);


        return(
            <Fragment>

                <TouchableOpacity onPress={opressFunc}>
                    {/* <Badge value="9" status="error" 
                        containerStyle={{}}
                    /> */}
                    <View 
                        style={{ 
                            fontSize:10,
                            position: 'absolute',
                            alignItems:"center",
                            alignSelf:"center",
                            alignContent:"center",
                            zIndex:2,
                            width:15,
                            height:15,
                            left:8,
                            top:-3,
                            backgroundColor:"red",
                            borderRadius:90,
                        }}
                    >
                        <Text style={{fontSize:11, color:"#FFF"}} >
                           9
                        </Text>
                    </View>
                    <Ionicons name="ios-list-box" 
                            style={[
                                Theme.colorWhite,
                                Theme.iconSizeX1,
                            ]}
                    />
                    
                </TouchableOpacity>
                
            </Fragment>
        );
    }


}