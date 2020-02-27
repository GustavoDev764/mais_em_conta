import React, { PureComponent, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default class CameraModal extends PureComponent {

    constructor(props){
       super(props);
       this.state = {
            type:Camera.Constants.Type.back,
            camera: null,
       }  

     
    }

    trocaCamera = (type) => {

        this.setState({type: type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
        });
    }

    tiraFoto = async () => {

        alert("em manutenção");
        // const {camera} = this.state;

        // if (camera) {
        //     const photo = await this.camera.takePictureAsync();
        //     console.log(photo);
        // }

    }
 
    render(){
         
        const {closeModalCamera} = this.props;

        const {type, camera} = this.state;
        
        return (
            <View style={{ flex: 1 }}>
              <Camera 
                ref={ref => {
                   this.setState({camera: ref});
                }}
                style={{ flex: 1 }} type={type}>


                <View style={styles.container}>

                  <TouchableOpacity
                    style={{}}
                    onPress={() => { this.trocaCamera(type); }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{}}
                    onPress={this.tiraFoto}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Tira Foto </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={{}}
                    onPress={closeModalCamera}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Fecha Camera </Text>
                  </TouchableOpacity>
                </View>


              </Camera>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: 'transparent',
        position:"absolute",
        bottom:0,
        flexDirection: 'row',
        justifyContent:"space-between",
        width:"100%",
        borderWidth:1,
    }
});
