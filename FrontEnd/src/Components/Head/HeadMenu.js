import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class HeadMenu extends React.Component{

    constructor(props){
        super(props);
    }


    render(){


        const { openMenu } = this.props;
        
       // console.log(this.props);


        return(

            <TouchableOpacity onPress={openMenu} style={{marginLeft:10,width:"100%",}}>
                    <Ionicons name="ios-menu" size={30} color={"#FFF"} />
            </TouchableOpacity>
        );
    }


}