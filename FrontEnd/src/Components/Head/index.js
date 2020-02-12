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
                    <View style={styles.containeHead}>
                         <View style={styles.bodyHead}>
                             <Text style={styles.textHead}>Mais em conta</Text>
                         </View>
                    </View>
                    }
                rightComponent={
                    <View style={styles.containerHeadRight}>

                        <TouchableOpacity style={styles.containerSearch} onPress={()=>{ return navigation.navigate(nameRoute,{routeBack:routeBack} ) }} >
                            <FontAwesome name="search" style={styles.iconSearch}/>
                        </TouchableOpacity>

                        <View style={{flex:1}}>
                            <Ionicons name="md-list-box" style={styles.icon} onPress={()=>{alert("ir para lista")}} />
                        </View>
                        
                    </View>
                    
                }
            
            />
        );
    }
}

{/* <TouchableOpacity onPress={()=>{ return navigation.navigate(nameRoute,{routeBack:routeBack} ) }} style={styles.searchBar}>
                            
                            <View style={styles.divInput}>
                                <FontAwesome name="search" style={styles.iconSearch}/>
                                <Text style={styles.textInput}>Buscar no Mais Econta</Text>
                            </View>
                               
                        </TouchableOpacity> */}

const styles = StyleSheet.create({

    /* INICIO HEAD */

    containeHead:{
        flexDirection:"row"
    },
    bodyHead:{
        flex:1,
    },

    textHead:{
        fontSize:22,
        color:"#FFF",
        fontWeight:"bold",
    },

    containerHeadRight:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    
    containerSearch:{
        flex:1,
        marginRight:25,
    },

    /* FIM HEAD */

    icon:{
        color:"#000",
        fontSize:width * .069,
    },
    iconSearch:{
        color:"#000",
        fontSize:width * .06,
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