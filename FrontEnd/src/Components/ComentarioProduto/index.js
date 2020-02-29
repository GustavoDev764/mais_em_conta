import React from 'react';
import {View, Text, TouchableOpacity,  StyleSheet} from 'react-native';
import {Rating} from 'react-native-elements';
import {Feather, FontAwesome} from '@expo/vector-icons';

import Theme from '../../Style';

export default class ComentProduto extends  React.Component{

    constructor(props){ 
        super(props);
    }


    render(){

        const {data} = this.props;

        return(
            <View style={styles.container}>
                <Rating
                    imageSize={18}
                    readonly
                    ratingCount={5}
                    startingValue={data.rating}
                    onFinishRating={this.ratingCompleted}
                    style={styles.rating}
                   
                />
                                       
                <View style={styles.body}> 

                    <Text style={[styles.title, Theme.PrimaryColor]}>{data.title}</Text>


                    <Text style={[styles.textComent, Theme.PrimaryColor]}>
                        {data.descricao}
                    </Text>

                    <Text style={[styles.nameAuto, Theme.PrimaryColor]}>{data.name}</Text>

                    <View style={styles.avaliaUser}>

                        <Text style={[styles.textAvalia, Theme.PrimaryColor]}>
                            esta avaliação foi util?
                        </Text>

                        <TouchableOpacity style={styles.containerIcon}  onPress={()=>{alert("Like");}}>
                            <Feather name={"thumbs-up"} style={styles.icon} />
                            <Text style={styles.textIcon}>({data.like})</Text>
                        </TouchableOpacity>
                                                    
                        <TouchableOpacity style={styles.containerIcon} onPress={()=>{alert("Like");}}>
                            <Feather name={"thumbs-down"} style={styles.icon} />
                            <Text style={styles.textIcon}>({data.notlike})</Text>
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

    title:{
        fontWeight:"bold",
        marginBottom:2,
        marginTop:2,
    },

    nameAuto:{
        marginTop:2,
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