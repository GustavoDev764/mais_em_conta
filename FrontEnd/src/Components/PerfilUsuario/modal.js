import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import {FontAwesome} from '@expo/vector-icons';

import Theme from '../../Style';


export default class ModalSelecao extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){

        const {
            modalVisible,
            openModal,
            closeModal,
            openGaleria,
            openCamera,
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
                                    
                            <View style={styles.modalHead}>

                                <TouchableOpacity 
                                    onPress={openCamera}
                                    style={[
                                         styles.containerIconText,
                                        {backgroundColor:"#ccc"}
                                    ]}
                                >
                                    <Text style={styles.textIcon}>Camera</Text>
                                    <FontAwesome name="camera" style={[Theme.iconSizeX2]} color={"#525252"} />
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    onPress={openGaleria}
                                    style={[
                                         styles.containerIconText,
                                           {backgroundColor:"#ccc"}
                                        ]}
                                >
                                    <Text style={styles.textIcon}>Galeria</Text>
                                    <FontAwesome name="image" style={[Theme.iconSizeX2]} color={"#525252"} />
                                </TouchableOpacity>
                                        
                                        
                            </View>


                            <TouchableOpacity 
                                onPress={closeModal}
                                style={[styles.containerButton, Theme.backgroundPrimaryColor]}
                            >
                                <Text style={styles.textButton}>Cancela</Text>
                            </TouchableOpacity>

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
        backgroundColor:"#FFF",
        flexDirection:"column",
        width:"100%",
        height:108,
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

    modalHead:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:2,
        marginBottom:2,
    },

    containerButton:{
        alignItems:"center",
        justifyContent:"center",
       // backgroundColor:"red",
        borderRadius:3,
        width:"100%",
        height:40,
    },

    textButton:{
        color:"#FFF",
        fontSize:20,
    },

});