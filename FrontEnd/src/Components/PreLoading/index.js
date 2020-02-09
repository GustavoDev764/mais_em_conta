import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';


export default class PreLoading extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:"#FFF",
      width:"100%",
      height:"100%",
      
    },
    
});