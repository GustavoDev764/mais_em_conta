import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';


const { width, height } = Dimensions.get('screen');

export default class SideBar extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return  ( 
            <ScrollView>
                <TouchableOpacity style={styles.profileHead}  onPress={ 
                        ()=>{
                            alert("Perfil");
                        }  
                        }>
                        <Image source={require("../../../assets/Profile.png")} style={styles.imageProfile}/>
                        <View style={styles.dadoUser}>
                            <Text numberOfLines={1} style={styles.nameUser}>Olá Sophie Stewart </Text>
                            <Text numberOfLines={1} style={styles.emailUser}>SophieStewart@gmail.com</Text>
                        </View>
                </TouchableOpacity>
                <View style={styles.container}>
                    <DrawerNavigatorItems {...this.props} />
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({

    dadoUser:{
        flexDirection:"column",
        padding:10,
        width:"56%",
        alignContent:"center",
    },
    nameUser:{
        fontSize:15,
        fontWeight:"bold"
    },

    emailUser:{
        fontSize:12,
    },

    profileHead: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
             
        paddingTop:25,
        paddingLeft:15,

        width: width,
        height: height * .15,
        backgroundColor: "#0086ff",
       
    },
    imageProfile:{
        width: 70,
        height:70,
        borderRadius: 8,
        borderWidth: 1,
        resizeMode:"contain",
        borderColor: "#FFF",
       
    },
    name:{
        color: "#FFF",
        fontSize:20,
        fontWeight: "800",
        marginVertical: 8,
    },
    profileHead2: {
        flexDirection: "row",

    },

    followers: {
        color: "#ffffffc4",
        fontSize: 13,
        marginRight: 8,
    },
    icon:{
        color: "#ffffffc4",
    }

});