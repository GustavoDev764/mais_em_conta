import React from 'react';
import {View, Text, TouchableOpacity,  StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';
import {Feather, FontAwesome} from '@expo/vector-icons';

export default class ComentProduto extends  React.Component{

    constructor(props){ 
        super(props);
    }


    render(){
        return(
            <View style={styles.container}>
                <Rating
                    imageSize={18}
                    readonly
                    ratingCount={5}
                    startingValue={2}
                    onFinishRating={this.ratingCompleted}
                    style={styles.rating}
                   
                />
                                       
                <View style={styles.body}> 

                    <Text style={styles.textComent}>
                            "Sistema operacional é ruim,
                             complicado, não é bom pra jogos
                            , e não gta 5 no fullHD e nem
                            o pes2020 so roda minecraft,"
                    </Text>

                    <Text style={styles.nameAuto}>Gustavo José</Text>

                    <View style={styles.avaliaUser}>

                        <Text style={styles.textAvalia}>
                            esta avaliação foi util?
                        </Text>

                        <TouchableOpacity style={styles.containerIcon}  onPress={()=>{alert("Like");}}>
                            <Feather name={"thumbs-up"} style={styles.icon} />
                            <Text style={styles.textIcon}>(5)</Text>
                        </TouchableOpacity>
                                                    
                        <TouchableOpacity style={styles.containerIcon} onPress={()=>{alert("Like");}}>
                            <Feather name={"thumbs-down"} style={styles.icon} />
                            <Text style={styles.textIcon}>(0)</Text>
                        </TouchableOpacity>

                    </View>
                </View> 

            </View>
        );
    }
}

const styles = StyleSheet.create({

    containerIcon:{
        flexDirection:"row",
    },

    icon:{
        fontSize:20,
    },

    textIcon:{
        marginLeft:5,
    },

    container:{
        marginBottom:15, 
        paddingBottom:5,
        borderBottomWidth: .3,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-start",
        paddingLeft:10,
    },

    rating:{
        paddingVertical: 10,
    },

    body:{
        marginTop:5,
    },

    textComent:{
        textAlign:"left",
        fontSize:15,
    },

    nameAuto:{
        fontSize:14,
    },

    avaliaUser:{
        marginTop:8,
        flexDirection:"row",
        justifyContent:"space-between",
    },

    textAvalia:{
        fontSize:15,
        fontWeight:"bold",
    }

});