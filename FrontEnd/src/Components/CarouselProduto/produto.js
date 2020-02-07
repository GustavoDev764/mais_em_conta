import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {Image, Rating} from 'react-native-elements';

export default class Produto extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        
        const { produto } = this.props;

        const {

            id,
            title,
            valor,
            rating,
            descricao,
            principaImage,
            images,

        } = produto;

        var valorArray = valor.split(',');

        return(
            <View style={{
               
                        flexDirection:"column",
                        alignItems:"flex-start",
                        marginRight:5,
                        marginBottom:10,
                        padding:1,
                        width:168,
                        height:"100%",
                    
                    }}
                
            >
                
                <View style={{padding:1, }}>
                    <Image
                
                    source={{ uri: principaImage }}
                    style={{ width: 160, height:160, resizeMode:"contain" }}
                    PlaceholderContent={<ActivityIndicator />}
                    />
                </View>

                <View style={{padding:2, marginTop:5, marginLeft:2, }}>

                    <View style={{flexDirection:"row",}}>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$ {valorArray[0]}</Text>
                        {
                            ( parseFloat(valorArray[1]) > 0 ) ? 
                            <Text style={{fontSize:13, fontWeight:"bold", color:"#2f2f2f"}}>,{valorArray[1]}</Text>
                            : null
                        }
                        
                    </View>

                    <View style={{alignItems:"flex-start", marginTop:5,marginBottom:5,}}>
                        <Rating
                            imageSize={18}
                            readonly
                            ratingCount={5}
                            startingValue={rating}
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 10 }}
                            style={{}}
                        />
                    </View>

                </View>

                <View style={{padding:2, marginTop:5, marginLeft:2}}>
                    <Text 
                        numberOfLines={3}
                        ellipsizeMode="tail"
                         style={{
                                fontSize:12,
                                
                                
                            }}>

                     {descricao}

                    </Text>   
                </View>



                
            </View>
        );
    }
}