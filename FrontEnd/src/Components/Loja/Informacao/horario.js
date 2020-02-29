import React, {Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Theme from '../../../Style';

export default class Horarios extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {item} = this.props;

        return(
            <Fragment>
                <View
                    style={styles.container}
                >
                    <Text
                        style={[styles.titleInfor, Theme.PrimaryColor]}
                    >
                        {item.dia}
                    </Text>
                    <Text
                        style={[styles.textInfor, Theme.PrimaryColor]}
                    >
                        {item.hora}
                    </Text>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"column",
        alignItems:"flex-start",
    },

    titleInfor:{
        fontSize:16,
        fontWeight:"bold",
        color:"#000",
    },

    textInfor:{
        fontSize:15,
        color:"#000",
        
    },
});

