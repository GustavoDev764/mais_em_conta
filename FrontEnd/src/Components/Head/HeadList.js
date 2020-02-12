import React, { Fragment, PureComponent } from 'react';

import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

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
                    <Ionicons name="ios-list-box" size={30} color={"#FFF"} />
                </TouchableOpacity>
                
            </Fragment>
        );
    }


}