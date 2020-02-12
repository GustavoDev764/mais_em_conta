import React, {PureComponent, Fragment} from 'react';
import {ScrollView, Dimensions, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';


const {width, height} = Dimensions.get("screen");

//components
import PreLoading from '../PreLoading';

export default class ImagesProduto extends PureComponent{

    constructor(props){
        super(props);
    }


    render(){


        const {images} = this.props;


        return(
            <Fragment>
                <ScrollView 
                    style={styles.container}
                    horizontal
                    pagingEnabled
                        
                >

                    {
                        images.map((item , index)=>{
                           
                           return <Image
                                key ={index}
                                style={styles.image}
                                source={{ uri: item }}
                                resizeMode={"contain"}
                                PlaceholderContent={<PreLoading />}
                            />
                          
                        })
                    }
                
                </ScrollView>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:-10,
        width:width,
        height:height * .3,
        backgroundColor:"#FFF",
    },

    image:{
        width:width,
        height:height * .3,
    },
});