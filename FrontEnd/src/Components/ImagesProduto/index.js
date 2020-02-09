import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';


const {width, height} = Dimensions.get("screen");

//components
import PreLoading from '../PreLoading';

export default class ImagesProduto extends React.Component{

    constructor(props){
        super(props);
    }


    render(){



        return(
            <ScrollView 
                style={{marginTop:-10, width:width, height:height * .3, backgroundColor:"#FFF"}}
                horizontal
                pagingEnabled
                    
            >
                <Image
                    style={{width:width,height:height * .3}}
                    source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_1GG.jpg" }}
                    resizeMode={"contain"}
                    PlaceholderContent={<PreLoading />}
                />
                <Image
                    style={{width:width,height:height * .3}}
                    source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_2GG.jpg" }}
                    resizeMode={"contain"}
                    PlaceholderContent={<PreLoading />}
                />

                <Image
                    style={{width:width,height:height * .3}}
                    source={{ uri: "https://images-americanas.b2w.io/produtos/01/00/img/85787/7/85787787_3GG.jpg" }}
                    resizeMode={"contain"}
                    PlaceholderContent={<PreLoading />}
                />
                    
            </ScrollView>
        );
    }
}