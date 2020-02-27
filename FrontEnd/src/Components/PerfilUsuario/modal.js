import React,{Fragment, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import {FontAwesome} from '@expo/vector-icons';


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
                                        {backgroundColor:"#07e8e8"}
                                    ]}
                                >
                                    <Text style={styles.textIcon}>Camera</Text>
                                    <FontAwesome name="camera" size={25} color={"#FFF"} />
                                </TouchableOpacity>

                                <TouchableOpacity 
                                    onPress={openGaleria}
                                    style={[
                                         styles.containerIconText,
                                           {backgroundColor:"#07e88b"}
                                        ]}
                                >
                                    <Text style={styles.textIcon}>Galeria</Text>
                                    <FontAwesome name="image" size={25} color={"#FFF"} />
                                </TouchableOpacity>
                                        
                                        
                            </View>


                            <TouchableOpacity 
                                onPress={closeModal}
                                style={styles.containerButton}
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
        color:"#FFF",
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
        backgroundColor:"red",
        borderRadius:3,
        width:"100%",
        height:40,
    },

    textButton:{
        color:"#FFF",
        fontSize:20,
    },

});