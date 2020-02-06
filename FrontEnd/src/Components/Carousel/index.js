import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


const { width: screenWidth , height } = Dimensions.get('window');

export default class Carrossel  extends React.Component{


    constructor(props){
        super(props)
    }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <TouchableOpacity style={styles.item} onPress={()=>{alert("ir para pagina "+item.link); } }>
                <ParallaxImage
                    source={{ uri: item.image }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.04}
                    {...parallaxProps}
                />
            </TouchableOpacity>
        );
    }

    render () {
        return (
             <Carousel
                    
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    data={this.props.image}
                    renderItem={this._renderItem}
                    hasParallaxImages={true}

                   
                    activeSlideAlignment={'center'}
                    slideStyle={styles.slideStyle}
                   

                    loop={true}
                    autoplay={true}
                    autoplayInterval={3000}
                    layout={'default'}
               
                />
            
        );
    }

}

const styles = StyleSheet.create({

    slideStyle:{
        flexDirection:"row",
        alignItems:"center",
        // backgroundColor:"red",
     },
    item: {
        width: screenWidth - 60,
        height: screenWidth * .41,
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        
      },
     
  });
