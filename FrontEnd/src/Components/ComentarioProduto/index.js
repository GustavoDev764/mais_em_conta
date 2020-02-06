import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';
import {Feather, FontAwesome} from '@expo/vector-icons';

export default class ComentProduto extends  React.Component{

    constructor(props){ 
        super(props);
    }


    render(){
        return(
            <View style={{marginBottom:15, paddingBottom:5, borderBottomWidth: .3, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start", paddingLeft:10}}>
                <Rating
                    imageSize={18}
                    readonly
                    ratingCount={5}
                    startingValue={2}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 10 }}
                    style={{}}
                />
                                       
                <View style={{marginTop:5,}}> 

                    <Text style={{textAlign:"left", fontSize:15}}>
                            "Sistema operacional é ruim,
                             complicado, não é bom pra jogos
                            , e não gta 5 no fullHD e nem
                            o pes2020 so roda minecraft,"
                    </Text>

                    <Text style={{fontSize:14}}>Gustavo José</Text>

                    <View style={{marginTop:8,flexDirection:"row", justifyContent:"space-between"}}>

                        <Text style={{fontSize:15, fontWeight:"bold"}}>
                            esta avaliação foi util?
                        </Text>

                        <TouchableOpacity style={{flexDirection:"row"}}  onPress={()=>{alert("Like");}}>
                            <Feather name={"thumbs-up"} style={{fontSize:20}} />
                            <Text style={{marginLeft:5}}>(5)</Text>
                        </TouchableOpacity>
                                                    
                        <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>{alert("Like");}}>
                            <Feather name={"thumbs-down"} style={{fontSize:20}} />
                            <Text style={{marginLeft:5}}>(0)</Text>
                        </TouchableOpacity>

                    </View>
                </View> 

            </View>
        );
    }
}