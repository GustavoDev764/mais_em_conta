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
                        <View style={{flexDirection:"column", padding:10, alignContent:"center"}}>
                            <Text style={{fontSize:15, fontWeight:"bold"}}>Olá Sophie Stewart</Text>
                            <Text style={{fontSize:12}}>SophieStewart@gmail.com</Text>
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
    profileHead: {
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
             
        paddingTop:25,
        paddingLeft:15,

        width: width,
        height: height * .15,
        backgroundColor: "#f3db07",
       
    },
    imageProfile:{
        width: 70,
        height:70,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: "#FFF"
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