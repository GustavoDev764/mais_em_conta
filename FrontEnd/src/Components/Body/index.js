import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default class Body extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        
        return(
            <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                        <View style={styles.view}>

                            {this.props.children}
                        
                        </View>
                    </ScrollView>
           </SafeAreaView>           
        );
    }
}

const styles = StyleSheet.create({

    safeAreaView:{
        flex:1,
    },

    scrollView:{
        backgroundColor: '#ececec'
    },

    view:{
        marginTop:10,
        marginBottom:10,
        padding:2,
    }



});
