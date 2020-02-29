import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Modal from "react-native-modal";
import {FontAwesome} from '@expo/vector-icons';

import Theme from '../../Style';


export default class ModalFoto extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {
            modalVisible,
            closeModal,
            photo,
            savePhoto,
           
        } = this.props;

        return(
            <Fragment>
                <View style={styles.containerModal}>   
                    <Modal
                        isVisible={modalVisible}
                        onSwipeComplete={closeModal}
                        swipeDirection="left"
                    >
                        <View style={styles.bodyModal}>
                            <View style={styles.containerImage}>
                                <Image 
                                    source={{uri:photo.uri}} 
                                    style={styles.imageProfile}
                                    resizeMode={"cover"}
                                />
                            </View>

                            <View style={styles.footer}>

                                
                                <TouchableOpacity 
                                    onPress={()=>{
                                        closeModal();
                                        savePhoto(photo);
                                    }}
                                    style={styles.itemFootter}>
                                   
                                    <FontAwesome name={"check-circle"} style={[Theme.iconSizeX4]} color={"#ccc"} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={closeModal}
                                    style={styles.itemFootter}>
                                    
                                    <FontAwesome name={"trash"} style={[Theme.iconSizeX4]} color={"#ccc"} />
                                </TouchableOpacity>

                            </View>

                        </View>

                    </Modal>
                </View>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({

    containerModal:{
        position:"absolute",
       
    },

    bodyModal:{
        paddingLeft:2,
        paddingRight:2,
        paddingBottom:3,
        paddingTop:0,
       // backgroundColor:"#FFF",
        flexDirection:"column",
        width:"100%",
        height:"100%",
        borderRadius:3,
    },

    containerIcons:{
        flexDirection:"row",
        padding:2,
        justifyContent:"space-between",
        alignItems:"center",
        height:"70%",
    },

    textIcon:{
        marginRight:5,
        fontSize:25,
        color:"#525252",
    },

    containerIconText:{
        flexDirection:"column",
        padding:2,
        alignItems:"center",
        width:"49%",
        borderRadius:3,
    },

    imageProfile:{
        width: "100%",
        height:"100%",
    },

    containerImage:{
        width:"100%",
        height:"90%",
        //borderWidth:1,
    },

    footer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
      //  padding:2,
        marginTop:2,
        height:"10%",
      //  borderWidth:1,
    },

    itemFootter:{
        borderWidth:1,
        backgroundColor:"#FFF",
        width:"50%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
    }

    

});