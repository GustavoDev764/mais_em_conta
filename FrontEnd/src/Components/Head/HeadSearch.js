import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Theme from '../../Style';

export default class HeadSearch extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        const { opressFunc} = this.props;
        
        return(

            <TouchableOpacity onPress={opressFunc}>
                    <Ionicons name="ios-search"
                         style={[
                                Theme.PrimaryColor,
                                Theme.iconSizeX1,
                        ]}
                        
                    />
            </TouchableOpacity>
        );
    }


}