import React from 'react';
import {TouchableOpacity, View, Text, Dimensions, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default class Head extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const { navigation, nameRoute, routeBack} = this.props;
        
        return(
            <Header
                containerStyle={styles.head}  

                leftComponent={
                    <FontAwesome name="bars" style={styles.icon} onPress={this.props.openMenu}/>
                }

                centerComponent={
                    <TouchableOpacity onPress={()=>{ return navigation.navigate(nameRoute,{routeBack:routeBack} ) }} style={styles.searchBar}>
                            
                        <View style={styles.divInput}>
                            <FontAwesome name="search" style={styles.iconSearch}/>
                            <Text style={styles.textInput}>Buscar no Mais Econta</Text>
                        </View>
                           
                    </TouchableOpacity>
                    }
                rightComponent={<Ionicons name="md-list-box" style={styles.icon} onPress={()=>{alert("ir para lista")}} />}
            
            />
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        color:"#000",
        fontSize:25,
    },
    iconSearch:{
        color:"#a2a2a2",
        fontSize:width * .04,
    },
    head:{
        backgroundColor: '#f3db07',
        justifyContent: 'space-around',
    },
    searchBar:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#FFF",
        height: height * .05,
        width:"130%",
        borderRadius:80,
    },

    divInput:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:20,
    },
    textInput:{
        marginLeft:8,
        fontSize:15,
        color:"#a2a2a2",
    }

});