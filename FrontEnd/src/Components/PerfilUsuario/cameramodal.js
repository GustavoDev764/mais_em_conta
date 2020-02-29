import React, { PureComponent, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import {FontAwesome} from '@expo/vector-icons';


import ModalFoto from './modalFoto';
import Theme from '../../Style';

export default class CameraModal extends PureComponent {

    constructor(props){
       super(props);
       this.state = {
            type:Camera.Constants.Type.back,
            camera: null,
            photo: null,
            OpenModal: false,
           
       }  

     
    }

   

    trocaCamera = (type) => {

        this.setState({type: type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        });
    }

    openModalFoto = () =>{
      this.setState({OpenModal: true});
    }

    closeModalFoto = () => {
      this.setState({OpenModal: false});
    }


    tiraFoto = async () => {
        var {camera} = this.state;
        if (camera) {
            const photo = await camera.takePictureAsync();
            this.setState({photo:photo});
            this.openModalFoto();
           
        }

    }
 
    render(){
         
        const {closeModalCamera, savePhoto} = this.props;

        const {type, camera, OpenModal, photo, saveFoto} = this.state;
        
        return (
          //se ja tive foto salvar
          saveFoto ? closeModalCamera

          : <View style={{ flex: 1 }}>
              <Camera 
                ref={ref => {
                   this.setState({camera: ref});
                }}
                style={{ flex: 1 }} type={type}>


                <View style={styles.container}>

                  <TouchableOpacity
                    style={{}}
                    onPress={() => { this.trocaCamera(type); }}>
                    <FontAwesome name={"refresh"} style={[Theme.iconSizeX4]} color={"#FFF"}  />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{}}
                    onPress={this.tiraFoto}>
                    <FontAwesome name={"play-circle"} style={[Theme.iconSizeX4]} color={"#FFF"}  />
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={{}}
                    onPress={closeModalCamera}>
                    <FontAwesome name={"close"} style={[Theme.iconSizeX4]}  color={"#FFF"} />
                  </TouchableOpacity>
                </View>


              </Camera>

              {
                OpenModal ? <ModalFoto 
                                closeModal = {this.closeModalFoto}
                                modalVisible = {OpenModal}
                                photo = {photo}
                                savePhoto = {savePhoto}
                             /> : null
              }
            </View>
          );
    }
  
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'transparent',
        position:"absolute",
        bottom:20,
        paddingLeft:30,
        paddingRight:30,
        flexDirection: 'row',
        justifyContent:"space-between",
        width:"100%",
    }
});
