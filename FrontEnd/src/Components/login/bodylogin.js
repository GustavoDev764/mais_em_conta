import React,{PureComponent} from 'react';
import {
    
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Text,
    View,
  
 } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';


export default class BodyLogin extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){
        return(
            <KeyboardAvoidingView 
                    style={styles.keyboardAvoidingView}
                    behavior="height"
            >

                <LinearGradient 
                    colors={['#F5640C', '#DF3500']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.container}
                >
                    
                    <SafeAreaView style={styles.safeAreaView}>

                        <ScrollView 
                            showsVerticalScrollIndicator={true}
                        >
                            <View style={styles.view}>

                                {this.props.children}
                                                                                                                          
                            </View>

                        </ScrollView>

                    </SafeAreaView> 
                
                </LinearGradient>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    
    container:{
        height:"100%",
    },


});

