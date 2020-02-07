import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import { Rating} from 'react-native-elements';

export default class Produto extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const { isBorder, produto } = this.props;

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

            <TouchableOpacity onPress={()=>{alert("ir para tela de produto")}} 
                    style={{
                        flex:1,
                        margin:3,
                        borderColor:"#8e8e8ead",
                        
                        paddingLeft: !isBorder ? 4 : 0,
                        paddingRight: isBorder ? 4 : 0,
                        
                        borderRightWidth:isBorder ? .8 : 0,
                        borderLeftWidth: !isBorder ? .8 : 0,
                        
                       
                       
                       
                    }}> 

                                           
                <View style={{height:130,}}>
                    <View style={{flex:1,}}>
                        <Image source={{uri: principaImage}} style={{flex:1, width:null, height:null, resizeMode:"contain"}} />
                    </View>
                </View>

                <View style={{flexDirection:"column", alignItems:"flex-start", padding:2, marginLeft: 0, marginTop:5,}}>
                    
                    <View style={{flexDirection:"row", }}>
                        <Text style={{fontSize:17, fontWeight:"bold", color:"#2f2f2f"}}>R$</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:17, fontWeight:"bold",marginLeft:5, color:"#2f2f2f"}}>{valorArray[0]}</Text>
                            { ( parseFloat(valorArray[1]) > 0 ) ? 
                                
                                <Text numberOfLines={1} style={{fontSize:13, fontWeight:"bold",marginLeft:1,color:"#2f2f2f"}}>,{valorArray[1]} </Text>
                                
                                : null}
                            
                        </View>
                    </View>

                    <View style={{marginTop:5,}}>
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

                <View style={{alignItems:"flex-start" ,marginTop:5,}}>
                    <Text numberOfLines={2} ellipsizeMode="tail" style={{textAlign:"left", fontSize:12, color:"#505050"}}>
                       {descricao}
                    </Text>
                </View>
                                            
            </TouchableOpacity>
        );
    }
}