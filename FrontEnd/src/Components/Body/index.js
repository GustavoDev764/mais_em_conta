import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default class Body extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        
        return(
            <SafeAreaView style={{flex: 1,}}>
                    <ScrollView style={{backgroundColor: '#ececec'}} showsVerticalScrollIndicator={false}>
                        <View style={{marginTop:10, marginBottom:10, padding:2}}>

                            {this.props.children}
                        
                        </View>
                    </ScrollView>
           </SafeAreaView>           
        );
    }
}