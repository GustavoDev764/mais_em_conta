import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class DetalhesItem extends PureComponent{

    constructor(props){
        super(props);
    }

    render(){

        const {index, value, destaque} = this.props;

        return(
            <Fragment>
                <View style={styles.container}>

                    <Text 
                        numberOfLines={3}
                        style={[styles.text, destaque ? styles.bold : null]}>
                        {index}
                    </Text>

                    <Text 
                        numberOfLines={3}
                        style={[styles.text, destaque ? styles.bold : null]}>
                     R$ {value}
                    </Text>

                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
    },

    text:{
        fontSize:14,
    },

    bold:{
        fontWeight:"bold",
    }
});