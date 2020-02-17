import React, { Fragment, PureComponent } from 'react';
import {Badge} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
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
                    <Badge value="9" status="error" 
                        containerStyle={{ position: 'absolute', zIndex:2, width:50, height:50, left:-6, top:-3}}
                    />
                    <Ionicons name="ios-list-box" 
                            style={[
                                Theme.PrimaryColor,
                                Theme.iconSizeX2,
                            ]}
                    />
                    
                </TouchableOpacity>
                
            </Fragment>
        );
    }


}